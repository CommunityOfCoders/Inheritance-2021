let map = L.map("tracker").setView(LONDON_CENTRE_LAT_LNG, 13);
let isStart = null;
let path = null;
let accumulatedDistance = 0;
let currentMarker = null;
const logConsole = document.querySelector('#log-console');
const distanceBox = document.querySelector('#distance-box');

const trackOptions = {
  enableHighAccuracy: HIGH_ACCURACY,
  maximumAge: MAX_CACHE_AGE_MILLISECOND,
  timeout: MAX_NEW_POSITION_MILLISECOND,
};

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoibTQxaGlnaHdheSIsImEiOiJja295ZjQya2wwaTkxMnFtY203Z21wNjhzIn0.uF1S6TqlDfW7wmQ17Kp4NQ",
  }
).addTo(map);

const startTracking = () => {
  if(!navigator.geolocation) {
    logConsole.textContent = 'Geolocation is not supported by your browser';
  } else {
    logConsole.textContent = 'Locating ...';
    distanceBox.textContent = '0.000';

    return navigator.geolocation.watchPosition(success, error, trackOptions);
  }
}

const updateMap = (event) => {

  const { latitude, longitude, timestamp, accuracy, altitude, altitudeAccuracy, heading, speed } = event.detail;
  
  report(`2. Received lat: ${latitude} | lng: ${longitude} | accuracy: ${accuracy} | altitude: ${altitude} | altitudeAccuracy ${altitudeAccuracy} | heading: ${heading} | speed: ${speed} | timestamp: ${timestamp}`);

  drawNewSegment(event.detail)
    .then((detail) => drawNewMarker(detail))
    .then((detail) => refreshMeter(detail))
}

const drawNewSegment = (detail) => {
  
  const { latitude, longitude } = detail;

  return new Promise((resolve) => {
    if (path == null) {

      path = L.polyline([
        [ latitude, longitude ],
      ], {
        color: '#fbc531',
        bubblingMouseEvents: true
      }).addTo(map);

      map.setView([latitude, longitude], 15)
      map.fitBounds(path.getBounds());

    } else {

      if (isStart === true) {

        path._latlngs.push([latitude, longitude]);
        path.redraw();

      }
    }

    return resolve(detail);
  })
}

const drawNewMarker = (detail) => {
  const { latitude, longitude, timestamp } = detail;

  return new Promise((resolve) => {

    if (!isStart) return (resolve(detail))

    if (currentMarker == null) {
      const marker = L.marker([latitude, longitude]).addTo(map);
      marker.bindPopup(`<b>Start at ${timestamp}</b>`);

      currentMarker = L.marker([latitude, longitude]).addTo(map);
    } else {
      currentMarker.bindPopup(`Current at ${timestamp}`)
      currentMarker.setLatLng(new L.LatLng(latitude, longitude));
    }

    return resolve(detail);
  })
}

const refreshMeter = (detail) => {
  return new Promise((resolve) => {

    if (path == null) return resolve(detail);

    if (!isStart) return resolve(detail);

    const delta = calculateDelta(path._latlngs)
    accumulatedDistance += delta;

    const formattedDistance = (round(accumulatedDistance, 3)).toLocaleString('en-US', { minimumFractionDigits: 3 })
    distanceBox.textContent = formattedDistance;
    report(`3. Updated path with ${delta} km | accumulatedDistance = ${formattedDistance}`);

    return resolve(detail);
  })
}

const success = (position) => {
  const { latitude, longitude } = position.coords;
  const timestamp = (new Date(Date.now())).toISOString();

  report( `1. Detected at ${timestamp}`);

  createNewEvent(latitude, longitude, timestamp);
}

const error = (err) => report(`Unable to retrieve your location! ${err.code} - ${err.message}`);

const report = (message) => logConsole.innerHTML += `<br /> ${message}`;

const createNewEvent = (latitude, longitude, timestamp) => {
  const geoEvent = new CustomEvent("GEO_EVENT", {
    detail: {
      latitude,
      longitude,
      timestamp,
    },
    bubbles: true,
    cancelable: true,
    composed: false,
  });
  document.querySelector("#tracker").dispatchEvent(geoEvent);
}

const toggle = () => {
  if (isStart === null) {
    isStart = true;
    startTracking();
  } else {
    isStart = !isStart;
  }
}

const calculateDelta = (track) => {
  // Ignore the first object in the path array
  if (track.length >= 3) {
    const newIndex = track.length - 1;
    const newLatLng = track[newIndex];
    const lastLatLng = track[newIndex - 1];
    const latitude = 0;
    const longitude = 1;
    return distance(newLatLng[latitude], newLatLng[longitude], lastLatLng[latitude], lastLatLng[longitude], 'K');
  } else {
    return 0;
  }
}

const round = (num, places) => {
	return +(parseFloat(num).toFixed(places));
}

document.querySelector("#tracker")
  .addEventListener("GEO_EVENT", updateMap);
import requests
# BQBCS8xdQQbXm4OL5cj4QphxP31L4QYt-msj7Si0n5pP4uNv9FC9VaF3WLbF470k0c-qUODHLPUVeU9jvJojQMS_V84eNKomLNMb6bE7Qc9GamIbTARrE5GlCreQFTi6Mya2hKxo3XEYzfHvj4rQVk68m06Fp7dKLuRxByrOJGMvWC9FVgCTbQIu0-SMAmBraiPul6xsDbPFHsXVTL5yzyd5-OWHhVk9
SPOTIFY_CREATE_PLAYLIST_URL = 'https://api.spotify.com/v1/users/Ananya/playlists'
ACCESS_TOKEN ="BQBCS8xdQQbXm4OL5cj4QphxP31L4QYt-msj7Si0n5pP4uNv9FC9VaF3WLbF470k0c-qUODHLPUVeU9jvJojQMS_V84eNKomLNMb6bE7Qc9GamIbTARrE5GlCreQFTi6Mya2hKxo3XEYzfHvj4rQVk68m06Fp7dKLuRxByrOJGMvWC9FVgCTbQIu0-SMAmBraiPul6xsDbPFHsXVTL5yzyd5-OWHhVk9"


def create_playlist_on_spotify(name, public):
	response = requests.post(
		SPOTIFY_CREATE_PLAYLIST_URL,
		headers={
			"Authorization": f"Bearer {ACCESS_TOKEN}"
		},
		json={
			"name": name,			
			"public": public
		}

		)
	json_resp = response.json()

	return json_resp

def main():
	playlist = create_playlist_on_spotify(
		name="My Private Playlist",
	    public=False
	)

	print(f"Playlist: {playlist}")


if __name__ == '__main__':
	main()
	
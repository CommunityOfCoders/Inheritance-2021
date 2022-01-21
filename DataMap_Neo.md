# Project-name: Data-Map

### Team name: Team Neo

## Team members

* [Pratiksha Sankhe](https://github.com/psankhe28) - sankhepratiksha3@gmail.com
* [Jash Shah](https://github.com/Jash-Shah) - jash28582@gmail.com
* [Dushant Harinkhede](https://github.com/Dushant12) - dushant.harinkhede@gmail.com
* [Naman Kothari](https://github.com/NamanKothari5) - namankothari0512@gmail.com

## Description
<!-- Add your project description here. Your project description should cover how your website/app works. That way you can convey what your project is without the need for anyone to view the code. A more detailed readme in your project repository is encouraged, which can include build and use instructions etc.

* Use bullet points for any feature descriptions you may want to add


Don't forget to replace the link here with *your own Github repository* link.

Along with this, add the link of the drive folder that contains the app APK/Screenshots/Screen Recordings. If you have hosted your project on the web, add that link as well. -->
Data-Map is a **movie recommendation** website which can help users discover movies which are similar to a particular movie the user enters, but with a twist! Instead of simply listing them  it creates a *Map of the recommendations*. 

* The Map is displayed with the user entered title at the centre and the reccomended movies spread around it.
* Their **attributes indicating their degree of similarity**.

The user can also navigate to maps of the reccomended movies by just clicking on them.
* The ML model uses **Cosine Similarity** and **K-Nearest Neighbours** algorithms to predict the movies.
* Used **Flask REST API** for backend querying of model. 
* **react-force-graph** module is used for displaying the data in map format. 
* **HTML/CSS/JS** and **React** are used for building the UI and other features of the website. 
* **TMDB 5000 Movie DataSet** is used for displaying movie info.
* GitHub repo link: [GitHub](https://github.com/psankhe28/Data-Map)
* Website link: [Website](https://data-map.vercel.app/)

## Technology stack
<a href="https://www.w3.org/TR/html5/" title="HTML5"><img src="https://github.com/get-icon/geticon/raw/master/icons/html-5.svg" alt="HTML5" width="31px" height="31px"></a>
<a href="https://www.w3.org/TR/CSS/" title="CSS3"><img src="https://github.com/get-icon/geticon/raw/master/icons/css-3.svg" alt="CSS3" width="31px" height="31px"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript"><img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" width="31px" height="31px"></a>
<a href="https://reactjs.org/" title="React"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="31px" height="31px"></a>
<a href="https://www.python.org/" title="Python"><img src="https://github.com/get-icon/geticon/raw/master/icons/python.svg" alt="Python" width="31px" height="31px"></a>
<a href="https://pandas.pydata.org/" title="pandas"><img src="https://github.com/get-icon/geticon/raw/master/icons/pandas-icon.svg" alt="pandas" width="31px" height="31px"></a>
<a href="https://numpy.org/" title="NumPy"><img src="https://github.com/get-icon/geticon/raw/master/icons/numpy-icon.svg" alt="NumPy" width="31px" height="31px"></a>

Tools and technologies that you learnt and used in the project.

1. React 
2. Python(Pandas)
3. Flask REST API
4. HTML/CSS/JS 
5. Node.js (node module [react-force-graph](https://github.com/vasturiano/react-force-graph#link-styling))

## Progress

- [x] Design and Train ML Model.
- [x] Design Website UI.
- [x] Setup API services to display info of Movies.
- [x] Implement react-force-graph for creating Map.
- [x] Create Map using react-force-graph.
- [x] Setup API using Flask for fetching ML data.

<!-- List down all the tasks/features for your project and cross out the ones which are completed. -->
#### File Structure
📦Data-Map  
 ┣ 📂public  
 ┃ ┣ 📜favicon.ico   
 ┃ ┣ 📜index.html  
 ┃ ┣ 📜manifest.json   
 ┃ ┣ 📜site.webmanifest  
 ┃ ┗ 📜_redirects  
 ┣ 📂src  
 ┃ ┣ 📂Components  
 ┃ ┃ ┣ 📂About  
 ┃ ┃ ┃ ┣ 📜about.css  
 ┃ ┃ ┃ ┣ 📜about.js  
 ┃ ┃ ┃ ┗ 📜portfolio-image.png  
 ┃ ┃ ┣ 📂Error_Page  
 ┃ ┃ ┃ ┣ 📜PageNotFound.css  
 ┃ ┃ ┃ ┗ 📜PageNotFound.js  
 ┃ ┃ ┣ 📂Footer  
 ┃ ┃ ┃ ┣ 📜Footer.css  
 ┃ ┃ ┃ ┗ 📜Footer.js  
 ┃ ┃ ┣ 📂Map  
 ┃ ┃ ┃ ┗ 📜Map.js  
 ┃ ┃ ┣ 📂Navbar  
 ┃ ┃ ┃ ┣ 📜Navbar.css  
 ┃ ┃ ┃ ┗ 📜Navbar.js  
 ┃ ┃ ┣ 📂page_2  
 ┃ ┃ ┃ ┣ 📜Map_bg.png  
 ┃ ┃ ┃ ┣ 📜page_2.css  
 ┃ ┃ ┃ ┗ 📜page_2.js  
 ┃ ┃ ┣ 📂Search bar  
 ┃ ┃ ┃ ┣ 📜Search.css  
 ┃ ┃ ┃ ┗ 📜Search.js  
 ┃ ┃ ┗ 📂video  
 ┃ ┃ ┃ ┗ 📜Map_bg.mp4  
 ┃ ┣ 📂config  
 ┃ ┃ ┗ 📜config.js  
 ┃ ┣ 📜App.css  
 ┃ ┣ 📜App.js  
 ┃ ┣ 📜App.test.js  
 ┃ ┣ 📜index.js  
 ┃ ┣ 📜reportWebVitals.js  
 ┃ ┗ 📜setupTests.js  
 ┣ 📜.gitignore  
 ┣ 📜package-lock.json  
 ┣ 📜package.json  
 ┗ 📜README.md  
 
## Future Prospects
- [ ] Making website responsive.
- [ ] Making the data model & querying better.
- [ ] Add 3d display option for graph.
- [ ] This concept can also be extended to *other media recommendation systems like books, music, games, etc*.
- [ ] Giving users an ability to *make a wishlist* and then tailor the recommendations further based on the movies in said wishlist.

## Project Setup
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

Note: this is a one-way operation. Once you `eject`, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Usage
1. The user enters a movie, to which they want to find similar movies.
2. The website processes the movie through its ML model and responds with movies whcih are most similar to the one entered(in terms of genre,cast,crew,rating,etc.).
3. These recommendations are then displayed in a Map format with the user's choice at the centre.
4. The recommendations are spread around the central movie indicating their degree of similarity.
5. The link width, arrow relative position and font size of the secondary movie nodes indicates their similarity to the central movie.


## Applications
It provides a visualization of recommendations which saves users from having to go through numbers, graphs, movie data themselves.

## Resourcess
* [Resources](https://github.com/psankhe28/Data-Map/tree/pratiksha-dev/resources)

## Mentors
  This project would not have been possible without the continous support of our mentors.
* [Ravi Maurya](https://github.com/RaviMauryaHootowl)
* [Utsav Khatu](https://github.com/utsavk28)
* [Vishad Dange](https://github.com/vishalbdange)
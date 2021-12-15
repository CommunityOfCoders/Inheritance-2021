# Project-name

### Team name: Team Neo

## Team members

* [Pratiksha Sankhe](https://github.com/psankhe28) - sankhepratiksha3@gmail.com
* [Jash Shah](https://github.com/Jash-Shah) - jash28582@gmail.com
* [Dushant Harinkhede](https://github.com/Dushant12) - dushant.harinkhede@gmail.com
* [Naman Kothari](https://github.com/NamanKothari5) - namankothari0512@gmail.com

## Mentors
* Ravi Maurya
* Utsav Khatu
* Vishad Dange

## Description
<!-- Add your project description here. Your project description should cover how your website/app works. That way you can convey what your project is without the need for anyone to view the code. A more detailed readme in your project repository is encouraged, which can include build and use instructions etc.

* Use bullet points for any feature descriptions you may want to add


Don't forget to replace the link here with **_your own Github repository_** link.

Along with this, add the link of the drive folder that contains the app APK/Screenshots/Screen Recordings. If you have hosted your project on the web, add that link as well. -->
Data-Map is a **movie recommendation** website which can help users discover movies which are similar to a particular movie the user enters, but with a twist! Instead of simply listing them  it creates a **Map of the recommendations**. 

* The Map is displayed with the user entered title at the centre and the reccomended movies spread around it.
* Their **distance from the centre indicating their degree of similarity**.

The user can also navigate to maps of the reccomended movies by just clicking on them.
* The ML model uses **Cosine Similarity** and **K-Nearest Neighbours** algorithms to predict the movies. 
* **Alchemy.JS** library is used for displaying the data in map format. 
* **HTML/CSS/JS** and **React** are used for building the UI and other features of the website. 
* **TMDB API** is used for displaying movie info.
* GitHub repo link: [GitHub](https://github.com/psankhe28/Data-Map)
* Drive link: [Drive](https://drive.google.com/drive/folders/1ZmfBMEtB4kXJ2Nkdq5H-4-CCTHRwF7iU?usp=sharing)
* Website link: Website link here

## Technology stack

Tools and technologies that you learnt and used in the project.

1. JavaScript (Alchemy.JS for creating maps)
2. HTML/CSS
3. Pyhton(Pandas, Sklearn)
4. React 
5. Flask

## Progress

- [x] Design and Train ML Model.
- [x] Design Website UI.
- [x] Setup API services to display info of Movies.
- [ ] Learn [Alchemy.JS](http://graphalchemist.github.io/Alchemy/#/) Library for creating Map.
- [ ] Create Map using Alchemy.
- [ ] Setup API using Flask for fetching ML data.

<!-- List down all the tasks/features for your project and cross out the ones which are completed. -->

## Project Setup
#### File Structure
```
📦Movie-map
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂Components
 ┃ ┃ ┣ 📂About
 ┃ ┃ ┃ ┣ 📜about.css
 ┃ ┃ ┃ ┗ 📜about.js
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┣ 📜Footer.css
 ┃ ┃ ┃ ┗ 📜Footer.js
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┗ 📜Home.js
 ┃ ┃ ┣ 📂Movie
 ┃ ┃ ┃ ┣ 📂ContentModal
 ┃ ┃ ┃ ┃ ┣ 📜ContentModal.css
 ┃ ┃ ┃ ┃ ┗ 📜ContentModal.js
 ┃ ┃ ┃ ┗ 📂SingleContent
 ┃ ┃ ┃ ┃ ┣ 📜SingleContent.css
 ┃ ┃ ┃ ┃ ┗ 📜SingleContent.js
 ┃ ┃ ┣ 📂Navbar
 ┃ ┃ ┃ ┣ 📜Navbar.css
 ┃ ┃ ┃ ┗ 📜Navbar.js
 ┃ ┃ ┣ 📂page_2
 ┃ ┃ ┃ ┗ 📜page_2.js
 ┃ ┃ ┗ 📂Search bar
 ┃ ┃ ┃ ┣ 📜Search.css
 ┃ ┃ ┃ ┗ 📜Search.js
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
 ┗ 📜package.json
```

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

*Note: this is a one-way operation. Once you `eject`, you can’t go back!*

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Usage
1. The user enters a movie, to which they want to find similar movies.
2. The website processes the movie through its ML model and responds with movies whcih are most similar to the one entered(in terms of genre,cast,crew,rating,etc.).
3. These recommendations are then displayed in a Map format with the user's choice at the centre.
4. The recommendations are spread around with their distance from the central movie indicating their degree of similarity.


## Applications
It provides an intuative visualtization of recommendations which saves users from having to go through numbers,graphs,movie data temselves.


## Future scope
* This concept can also be extended to other media recommendation systems like books, music, games, etc.
* Giving users an ability to make a wishlist and then tailor the reccomedations further based on the movies in said wishlist.
## Screenshots
<!-- Add a few screenshots for parts of the project completed till now to give the viewer a quick idea of what your project looks like. After all, a picture speaks a thousand words.

You'll have to link the screenshots from your drive folder here. -->
### 1. Landing Page
![Screenshot alt text](https://drive.google.com/uc?export=view&id=1z43jjS_O1ZuZ9T6gfr9K_m4Q79iJGXbA "Landing Page")<br/><br/><br/>


### 2. Movie Description Template
![Screenshot alt text](https://drive.google.com/uc?export=view&id=1yVnz9Wt4xNfYVtUN-4DvRN1lj2RAssbn "Landing Page")<br/><br/>

### 3. Map Template
![Video of Map]( https://drive.google.com/uc?export=view&id=1E0OD6x1Ab-4Hg0uRCNdK811ZJ-03f2aC "Map Template Video")<br/><br/>
<!-- Use this template as a guide for writing your documentation. Feel free to customize and adapt it for you project.
For more Markdown syntax help, visit [here](https://www.markdownguide.org/basic-syntax/) -->
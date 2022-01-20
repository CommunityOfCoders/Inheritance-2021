
<p>
<h1 align = "center" > <strong>🌉STREET RACER 2D🌉 </strong> <br>
<h3 align = "center">Team :- bhagwanBharose
<h3 align = "center">Project name :- Gamers Paradise
 <hr>
</p>


## Table of Contents

- [Table of Contents](#table-of-contents)
- [🗒️About](#️about)
- [📁 File Structure](#-file-structure)
- [👨‍💻 Tech-Stack](#-tech-stack)
- [🛠️ Prerequisites](#️-prerequisites)
  - [Gesture control](#gesture-control)
  - [Jupyter Notebook](#jupyter-notebook)
  - [Game](#game)
- [🎲 Starting the game](#-starting-the-game)
- [👋 Game Controls](#-game-controls)
- [📈 Future Prospects](#-future-prospects)
- [🎮 Demo](#-demo)
  - [Demo of the game using keyboard<](#demo-of-the-game-using-keyboard)
  - [Demo of the game using hand detection](#demo-of-the-game-using-hand-detection)
- [🏅 Team Members](#-team-members)
- [😎 Mentors](#-mentors)
- [License](#license)


## 🗒️About

• Making a Gesture-controlled 2D Car Racing game using phaser.js

• Implementing stearing control using hand gestures with help of OpenCv library of Python

• Visit our [Github repo](https://github.com/ParthShirole/Gamers-Paradise) to clone to play the game.

## 📁 File Structure
```
┣ 📂my_game
 ┃ ┣ 📂assets                    # All the images required for the game 
 ┃ ┃ ┣ 📜enemycar.png
 ┃ ┃ ┣ 📜phaser.png
 ┃ ┃ ┣ 📜player.png
 ┃ ┃ ┣ 📜road_test.png
 ┃ ┃ ┣ 📜sound.mp3
 ┃ ┃ ┗ 📜star.png              
 ┃ ┣ 📜game.js                   # It is the main JavaScript file for the game
 ┃ ┣ 📜index.html                # It imports the game.js file
 ┃ ┣ 📜phaser.js
 ┃ ┗ 📜phaser.min.js
 ┣ 📜Gesture_Controls.ipynb      # Gesture controls for the game in .ipynb format
 ┣ 📜Gesture_Controls.py         # Gesture controls for the game in .py format
 ┣ 📜LICENSE
 ┗ 📜README.md
```

## 👨‍💻 Tech-Stack

<p>
<image src="https://github.com/get-icon/geticon/blob/master/icons/html-5.svg" width=20 title="Html"> &nbsp; Html <br> 
<image src="https://github.com/get-icon/geticon/blob/master/icons/css-3.svg" width=20 title="CSS"> &nbsp; CSS <br>
<image src="https://github.com/get-icon/geticon/blob/master/icons/javascript.svg" width=20 title="Javascript"> &nbsp; Javascript <br>
<image src="https://github.com/get-icon/geticon/raw/master/icons/python.svg" width=25 title="python"> &nbsp; Python <br>
<image src="https://user-images.githubusercontent.com/83249996/146242645-c764b523-2fce-4f59-b2e9-b51a5a0fc028.jpg" width=25 title="phaser"> &nbsp; Phaser.js <br>
<image src="https://github.com/get-icon/geticon/blob/master/icons/opencv.svg" width=18 title="opencv"> &nbsp; OpenCV
</p>

 
## 🛠️ Prerequisites 
  ### Gesture control
  Following Libraries must be installed. 
  The commands for installation are :<br/>
 ```
 pip install numpy
 ```
 ```
 pip install opencv-python
 ```
 ```
 pip install mediapipe
 ```
 ```
 pip install cvzone==1.4.1 
 ```
 ```
 pip install pynput
 ```
  In the code there is a part to capture the live stream Videocapture(n) here the index n is by default 0 for most machines but if the webcam doesn't work with 0 you can try 1,-1,0 and so on. 
<br/>
 
 ### Jupyter Notebook
 If you are using the Gesture_Controls.ipynb file, you will have to use Jupyter Notebook. You can install Jupyter Notebook from their [website](https://jupyter.org/install).
 
 ### Game
 Requires Vscode with ``Live Server`` extension installed.
 
## 🎲 Starting the game
1. Clone the repo using 
 ```
  git clone https://github.com/ParthShirole/Street-Racer-2D.git 
  ```
2. Open ``` index.html ```
3. Run ```index.html``` using ``Go Live`` option of Vscode (enabled after downloading Live Server extension)
4. Now run ```Gesture_Controls.py``` or ```Gesture_Controls.ipynb``` and place the VideoCapture window on top of the game screen. 
 

## 👋 Game Controls
 We have mapped the controls of the car to the "A" and "D" keys on the keyboard so by using these virtual keys we can control the car .
  We are using Mediapipe hand detection model under hood for hand detection and the keyboard module for pressing the keys through our code.
  
  ![hand_landmarks](https://user-images.githubusercontent.com/81592570/146204032-e8524d4c-97db-461f-9d6e-6018c3275de2.png)
 
 - For Left motion : 🤏 Join the index finger and the thumb (distance between them should be less than 30) <br>
 - For Right motion : Keep the index finger and the thumb far away from each other (distance between them should be greater than or equal to 30)<br>
 - Press SPACE to Start game<br>
 - Press ENTER to Restart game

## 📈 Future Prospects

- [ ] Use Flask to import gesture control code
- [ ] Implement socket connection between client and server
- [ ] Add levels in Game

  
## 🎮 Demo
  ### Demo of the game using keyboard<


https://user-images.githubusercontent.com/81592570/146214263-dfd22969-75af-4e91-a78e-102664125066.mp4


 ### Demo of the game using hand detection
  




https://user-images.githubusercontent.com/82901720/150368301-25cd2c7d-ef16-4321-90e6-db02eb45b184.mp4
  
 

 
## 🏅 Team Members

- [Parth Shirole](https://github.com/ParthShirole) - parthshirole06@gmail.com
- [Aryaman Shardul](https://github.com/Aryaman22102002) - aryashardul2002@gmail.com
- [Rishabh Bali](https://github.com/Ris-Bali) - rishabhsbali@gmail.com
- [Kunal Agarwal](https://github.com/KunalA18) - kunalagarwal1072002@gmail.com 

## 😎 Mentors 
- [Kush Kothari](https://github.com/kkothari2001) 
- [Reshmika Nambiar](https://github.com/Reshmika-Nambiar)
  
## License
The [License](LICENSE) used in this project. 

# MimicCog

### Team name: NaN

## Team members
* Aditya Mhatre - [GitHub Profile](https://github.com/Adi935), [Mail](adi13mhatre@gmail.com)
* Chirag Shelar - [GitHub Profile](https://github.com/ChiragShelar), [Mail](chiragshelar1428@gmail.com)
* Sarrah Bastawala - [GitHub Profile](https://github.com/sarrah-basta), [Mail](sarrah.basta@gmail.com)
* Kanak Meshram - [GitHub Profile](https://github.com/kanakmeshram), [Mail](canaq.1301@gmail.com)

## Mentors
* Ravi Maurya
* Shreyas Penkar
* Tanish 

## Description
This project focuses on emulating the human facial features and represent it as a 2D emoticon. 
* 2 Pre-Trained models are used for evaluting the captured frames from the live webcam stream.
* A frame is sent every 1 second to the backend (python code) which returns an int which is then decoded in .js to display the emoticon on the website.
* If the first pre-trained model detects a person the frame is passed on to the second model that identifies the emotion and its degree displayed by the person.

Visit our [Github repo](https://github.com/Adi935/MimicCog) to clone our repository and to get updates on the future prospects and progress of our project.

## File Structure
```
MimiCog
┣ 📂static
 ┃ ┣ styles.css
┣ 📂templates
 ┃ ┣ index.html
 ┃ ┣ secondPageWebcam.html
┣ appFlask.py
┣ coco.txt
┣ detectObjectMy.py
┣ fer2013_mini_XCEPTION.102-0.66.hdf5
┣ functions.py
┣ haarcascade_frontalface_default.xml
┣ yolov3.cfg
```
## Technology stack

* ### Languages used: 
    1. Python
    2. HTML
    3. CSS
    4. JavaScript
* ### Dependencies used:
    1. TensorFlow
    2. Flask
    3. OpenCV
    4. Keras
    5. PIL
    6. SocketIO
    7. Scikit learn
* ### Algorithms/Pre-Trained models used:
    1. Yolo v3 pre-trained on DarkNet on imagenet dataset.
    2. Architecture used is a fully-convolutional neural network that contains 4 residual depth-wise seperable convolutions where each convolution is followed by a batch normalization operation and a ReLU activation function.

## Progress

- [x] Object Detection using Yolo v3 (In Python).
- [x] Emotion Detetcion using pre-trained model (In Python).
- [x] Creating a frontend that can capture a live webcam stream (Locally).
- [x] Sending frames of video from frontend to backend for detection and reciving detected output using flask and SocketIO.
- [x] Displaying an Emoticon for detected object/emotion on the website.
- [ ] Take in pre-recorded video as a stream instead of live webcam.
- [ ] Refining the website.

## Project Setup
Clone this GitHub Repository or Download it. For cloning you must have GIT installed.

Type this command in the Git Bash Terminal:
> git clone https://github.com/Adi935/MimicCog

Run the following command to make sure you have the latest version of pip installed:
>pip install --upgrade pip

First you will have to create a Virtual Enviornment in conda. Henceforth, run all commands in anaconda prompt.
>conda create --name conda-env python 

Following Dependencies must be installed to run this project. The commands for installation are:
>pip install numpy

>pip install opencv-python

>pip install tensorflow

>pip install flask


## Usage
After the Project has been Setup, 
navigate to the directory where the repository is downloaded/cloned. Make sure you are staying in the same virtual enviornment in anaconda prompt.

Run the command 
>python appFlask.py

The following screen would be shown.

<a href="https://ibb.co/hBMRbxp"><img src="https://i.ibb.co/x1sSWKV/tensorflow.png" alt="tensorflow" border="0"></a>

Go to your preferred browser and enter the URL displayed on your console to run this Project (here it is http://127.0.0.1:5000/).


## Applications
* Can be used to convey emotions through a 2D emoticon without revealing your face for example in video calls, livestreams, etc.
* Simulate your surroundings and yourself in a 2D enviornment on your screen.
* Can be used in games, apps, etc. that uses emotions/expressions shown by the user.

## Future scope
- [ ] Make the Frontend compatiable as an extension for multiple existing browsers, websites and applications.
- [ ] Instead of just one object, the entire scene captured is simulated as a 2D enviornment.

## Screenshots

* Detection of objects/emotions is shown in the console log.

<a href="https://ibb.co/sbDq0G6"><img src="https://i.ibb.co/8NR9Wpd/Whats-App-Image-2022-01-21-at-15-43-04.jpg" alt="Whats-App-Image-2022-01-21-at-15-43-04" border="0"></a>


* Relevant Emoticon is displayed

<a href="https://ibb.co/426gqQY"><img src="https://i.ibb.co/BGXKp1r/emoticon1.png" alt="emoticon1" border="0"></a>

* Working of Project. [Drive Link](https://drive.google.com/drive/u/1/folders/1XAjWDdYxKxwJsMMGaUxV6yQZeptl1og6)
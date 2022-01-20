# MimicCog

This project aims at detecting objects from a video/live feed, and then displaying them as their emojis. 
## Table Of Contents

- [Project-Description](#project-description)
- [Technology-Stack](#technology-stack)
- [Features-implemented-so-far](#features-implemented-so-far)
- [Features-left-to-be-implemented](#features-left-to-be-implemented)
- [Demonstration](#demonstration)
- [Contributors](#contributors)
- [Mentors](#mentors)
### Project-Description

In this project, we have used OpenCV to implement Real-Time Object Detection and then interpreting those objects as "Emojis" as defined by Unicode Consortium, and then displaying the said object.

We have used YOLO v3 object detection algorithm and a pre-trained Darknet model to implement these features. The 80-image COCO dataset was used as YOLO weights
___
### Technology-Stack

- Languages Used - Python , Jupyter Notebook
- Libraries Used 
  - GUI - tkinter 
  - Object Detection - OpenCV, Darknet
- Algorithms Used - YOLO v3
___

### Features-implemented-so-far
- Using OpenCV to read image (from a static image, video, or live camera feed).
- Applying YOLO v3 Object Detection, and detecting the most prominent object in the frame(if multiple objects present), among the COCO dataset.
- Finding the most similar "emoji" (as defined by the Unicode Consortium) corresponding to the Object Detected, and then displaying it.
- Designed a GUI on tkinter
___
### Features-left-to-be-implemented
- Integrating the backend code into GUI.
- Packaging the code as an .exe executable file.
- Displaying Multiple Objects(if any) detected in the same frame.
- Emotion Detection (using Transfer Learning/Continual Learning/two separate models)
- 3-D Face Emulation.
___
### Demonstration
![demo](https://github.com/Adi935/MimicCog/blob/b4199050655471ff8678b2c9a747290f1f453641/assets/demo2.jpeg)
![demo video](https://github.com/Adi935/MimicCog/blob/f9f39d71794a3f5727d2f54d89959b958e44d82d/assets/demo.mp4)
![demo](https://github.com/Adi935/MimicCog/blob/3f965afc401dcd009d03c4fd22a2676f3edd6a03/assets/presentOutput.jpg)
___
### Contributors
___
- [Aditya Mhatre](https://github.com/Adi935) (adi13mhatre@gmail.com)
- [Chirag Shelar](https://github.com/Locoya) (chiragshelar1428@gmail.com)
- [Sarrah Bastawala](https://github.com/sarrah-basta) (sarrah.basta@gmail.com)
- [Kanak Meshram](https://github.com/kanakmeshram) (canaq.m1301@gmail.com)

### Mentors
___
- [Ravi Maurya](https://github.com/RaviMauryaHootowl)
- [Shreyas Penkar](https://github.com/Shreyas-Penkar)
- [Tanish Sawant](https://github.com/TanishSawant)

  

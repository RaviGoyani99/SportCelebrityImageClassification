# Sports Celebrity Image Classification

Welcome to the Sports Celebrity Image Classification project! This project aims to classify images of famous sports personalities using machine learning techniques. The classification model is capable of distinguishing between five well-known sports celebrities:

* Lionel Messi (Football)
* Maria Sharapova (Tennis)
* Roger Federer (Tennis)
* Serena Williams (Tennis)
* Virat Kohli (Cricket)

## Image 1: Single Celebrity Classification
![image](https://github.com/user-attachments/assets/460955ec-7783-45b6-a480-5336b510be8f)

This image demonstrates the classification of a single sports celebrity, where the model identifies the celebrity as Lionel Messi and provides the probability scores for all five possible classes.

## Image 2: Multiple Celebrity Classification
![image](https://github.com/user-attachments/assets/5aeb313d-fd7b-4117-bd61-bf589467ffa6)

This image showcases the classification of two different sports celebrities, Maria Sharapova and Roger Federer, with the model correctly identifying each and providing separate probability scores for both individuals.


### Project Overview
In this project, we've implemented a full-fledged image classification system, encompassing various stages from data acquisition to deploying a web-based interface for real-time predictions. The key components of the project include:

**1. Data Collection:** We gathered images of the five sports celebrities by scraping images from Google. This involved extensive data cleaning and preprocessing to ensure the quality of the dataset.

**2. Model Building:** We used popular machine learning libraries such as Scikit-learn and OpenCV to build a robust classification model. The model was trained on the curated dataset, using techniques like data augmentation to improve its generalization.

**3. Web Interface:** A user-friendly web interface was developed using Flask to allow users to upload images and get instant predictions on which sports celebrity the image represents. The interface also displays the probability scores for each prediction.

**4. Deployment:** The entire application was deployed using Nginx, ensuring it is scalable and accessible.

### Technologies Used
The project integrates multiple technologies to deliver an end-to-end machine learning solution:

Python: The core programming language used for data processing, model building, and server-side development.
Numpy & OpenCV: Utilized for data cleaning and preprocessing tasks, including image resizing, normalization, and augmentation.
Matplotlib & Seaborn: Used for visualizing data distributions and model performance metrics.
Scikit-learn: The primary machine learning library used to build and evaluate the classification model.
Flask: A lightweight web framework used to create the web interface and API for the model.
HTML/CSS/JavaScript: Frontend technologies used to build the user interface of the application.
Jupyter Notebook, Visual Studio Code, Pycharm: IDEs used for different parts of the development process.

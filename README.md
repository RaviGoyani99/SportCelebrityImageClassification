# Sports Celebrity Image Classification

Welcome to the Sports Celebrity Image Classification project! This project aims to classify images of famous sports personalities using machine learning techniques. The classification model is capable of distinguishing between five well-known sports celebrities:

### Technologies Used
The project integrates multiple technologies to deliver an end-to-end machine learning solution:

1. Python
2. Numpy and OpenCV for data cleaning
3. Matplotlib & Seaborn for data visualization
4. Sklearn for model building
5. Jupyter notebook, visual studio code and pycharm as IDE
6. Python flask for http server
7. Deploy to production using aws Ec2 

## Image 1: Single Celebrity Classification
![image](https://github.com/user-attachments/assets/460955ec-7783-45b6-a480-5336b510be8f)

This image demonstrates the classification of a single sports celebrity, where the model identifies the celebrity as Lionel Messi and provides the probability scores for all five possible classes.

## Image 2: Multiple Celebrity Classification
![image](https://github.com/user-attachments/assets/5aeb313d-fd7b-4117-bd61-bf589467ffa6)

This image showcases the classification of two different sports celebrities, Maria Sharapova and Roger Federer, with the model correctly identifying each and providing separate probability scores for both individuals.


### Project Overview
In this project, we've implemented a full-fledged image classification system, encompassing various stages from data acquisition to deploying a web-based interface for real-time predictions. The key components of the project include:

**Data Collection:** We gathered images of the five sports celebrities by scraping images from Google. This involved extensive data cleaning and preprocessing to ensure the quality of the dataset.

**Model Building:** We used popular machine learning libraries such as Scikit-learn and OpenCV to build a robust classification model. The model was trained on the curated dataset, using techniques like data augmentation to improve its generalization.

**Web Interface:** A user-friendly web interface was developed using Flask to allow users to upload images and get instant predictions on which sports celebrity the image represents. The interface also displays the probability scores for each prediction.

**Deployment:** The entire application was deployed using Nginx, ensuring it is scalable and accessible.

### Installation Guide

**1. Clone the Repository:** git clone https://github.com/your-username/sports-celebrity-classifier.git

**2. Install Dependencies:** Navigate to the project directory and run pip install -r requirements.txt to install all necessary Python packages.

**3. Run the Server:** Start the Flask server by navigating to the server directory and running python app.py.

**4. Access the Web Interface:** Open your browser and go to http://localhost:5000 to access the image classification interface.

### Conclusion
This project demonstrates the integration of various data science, machine learning, and web development tools to build a functional and practical application. It showcases how machine learning models can be effectively deployed to solve real-world problems, providing users with an interactive and engaging experience.

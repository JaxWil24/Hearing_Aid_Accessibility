# Hearing Aids and Costco
Legislation recently passed regarding hearing aids that will impact a large percent of the population. 

![Costco](https://user-images.githubusercontent.com/106329824/198686685-262efbd1-3de0-4bf0-88a5-2c8d7df4ffd9.png)

## How does the need for over-the-counter hearing aids affect Costco?
This analysis is to demonstrate how Costco can impact and increase accessibility for over-the-counter hearing aids. 

## Communication
![Zoom](https://user-images.githubusercontent.com/106329824/198689305-eaff54cd-e6a1-408b-a853-ab3342e8430e.jpg)


* 1 hour Zoom meetings occuring 4 times a week
* 6:30pm - 9:30pm Tuesday & Thursday to meet deadlines, work through roadblocks and create new goals
* Daily group updates using slack
* Assigning roles as new needs and requirements come up.

# Technologies Used
## Data Cleaning and Analysis
The cleaning and analyzing of the data included 
* Dropping irrelevant columns
* Creating consistency in label names
* Locating Costco hearing clinics
* Merging demographic data 

Using Pandas, data that started as census data was transformed to csv files allowing for quick and simple analysis.

![pandas](https://user-images.githubusercontent.com/106329824/198688854-4270eaa5-c9ee-4077-8bc0-36c8893a9580.jpg)


## Database Storage
AWS S3 Bucket has all the requirements for this analysis and will be used for project files.

![AWS S3](https://user-images.githubusercontent.com/106329824/198686111-b3f238c1-1930-44ac-9c12-cb1bc2f3882d.jpg)


* Easy to share work
* Connects to multiple kinds of files and pictures

## Machine Learning
The machine learning model will be a logistic regression.  

![ML](https://user-images.githubusercontent.com/106329824/198689906-7dbebcf9-14e0-456e-b50f-7dab7ee06345.jpg)


* A mock-up for structured and unstructured notebooks 
  * Competitive model structure (running 2 - 3 models to find best fit)
* Using Logistic Regression, RandomForest, and K-Means for feature selection
* Training on Costco locations
* Using precision and recall

## Dashboard
The dashboard will be a website. 
* Flask will be used to create JavaScript and HTML files.
  * Graphs, Maps, and Images

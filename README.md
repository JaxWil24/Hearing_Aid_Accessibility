# Hearing Aids and Costco
Legislation recently passed regarding hearing aids that will impact a large percent of the population. 

![Costco](https://user-images.githubusercontent.com/106329824/198686685-262efbd1-3de0-4bf0-88a5-2c8d7df4ffd9.png)

## How does the need for over-the-counter hearing aids affect Costco?
This analysis is to demonstrate how Costco can impact and increase accessibility for over-the-counter hearing aids. 

## Communication
* 1 hour Zoom meetings occuring 4 times a week

![image](https://user-images.githubusercontent.com/106329824/198403149-6de312d7-2ac5-4a5e-9ce1-3fc05755ac1c.png)

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

![image](https://user-images.githubusercontent.com/106329824/198427117-514f83b3-8eb1-4e68-9fe3-431a91c03529.png)

## Database Storage
AWS S3 Bucket has all the requirements for this analysis and will be used for project files.

![AWS S3](https://user-images.githubusercontent.com/106329824/198686111-b3f238c1-1930-44ac-9c12-cb1bc2f3882d.jpg)


* Easy to share work
* Connects to multiple kinds of files and pictures

## Machine Learning
The machine learning model will be a logistic regression.  

![image](https://user-images.githubusercontent.com/106329824/198428410-5e11b39c-81d3-415a-b55f-7bcec7cc11af.png)

* A mock-up for structured and unstructured notebooks 
  * Competitive model structure (running 2 - 3 models to find best fit)
* Using Logistic Regression, RandomForest, and K-Means for feature selection
* Training on Costco locations
* Using precision and recall

## Dashboard
The dashboard will be a website. 
* Flask will be used to create JavaScript and HTML files.
  * Graphs, Maps, and Images

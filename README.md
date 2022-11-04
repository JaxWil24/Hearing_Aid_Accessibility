# Hearing Aids and Costco 

Legislation recently passed regarding hearing aids that will impact a large percent of the population and providers, such as Costco. 

## Project Outline
![Pipeline](https://user-images.githubusercontent.com/106329824/199831320-92068c49-9c88-4a62-8ea3-e39746a44c0d.png)



# Topic
"Costco’s hearing aid centers have been one of the biggest success stories in the hearing aid industry over the past decade. According to a 2017 report from Bernstein Research, sales at Costco hearing centers have grown at approximately 20% per year since 2011, with Costco expected to account for 19% of all units sold in the U.S. retail market by 2021." - (https://www.hearingtracker.com/hearing-aids/costco)

Final Ruling Link
(https://www.federalregister.gov/documents/2022/08/17/2022-17230/medical-devices-ear-nose-and-throat-devices-establishing-over-the-counter-hearing-aids)

FDA News Release
(https://www.fda.gov/news-events/press-announcements/fda-finalizes-historic-rule-enabling-access-over-counter-hearing-aids-millions-americans)

![Costco](https://user-images.githubusercontent.com/106329824/198686685-262efbd1-3de0-4bf0-88a5-2c8d7df4ffd9.png)![otchearingaids](https://user-images.githubusercontent.com/106329824/199606602-171e9107-1f56-42ec-9bdd-1b2b28147a59.jpg)  

# Question
## How does the need for over-the-counter hearing aids affect Costco?
This analysis is to demonstrate how Costco can impact and increase accessibility for over-the-counter hearing aids. 

# Technologies Used

## Data Sourcing and Selection
Each teammate spent a full day researching data to contribute towards analysis.

Data chosen: 
* ESRI 2019 Census Demographics
* ESRI 2021 ACS
* Costco Locations - Kaggle

Data considered: 
* NIDCD Data


## Data Cleaning and Analysis
The cleaning and analyzing of the data included:
* Dropping irrelevant columns
* Creating consistency in label names
* Locating Costco hearing clinics
* Merging demographic data 

Using Pandas, a Python library, data that started as census data was transformed to csv files allowing for quick and simple analysis.


![pythonpandas](https://user-images.githubusercontent.com/106329824/198712252-15bc5708-b21f-42c9-962d-f5e414c02b97.jpg)



## Database Storage
AWS S3 Bucket has all the requirements for this analysis and will be used for this project.

![AWS S3](https://user-images.githubusercontent.com/106329824/198686111-b3f238c1-1930-44ac-9c12-cb1bc2f3882d.jpg)


* Easy to share work with teammates
* Connects to multiple kinds of files, graphs, and pictures

## Machine Learning
The machine learning model will be a Logistic Regression, SMOTEENN, and RandomForest.  

![ML](https://user-images.githubusercontent.com/106329824/198689906-7dbebcf9-14e0-456e-b50f-7dab7ee06345.jpg)


* Competitive model structure (running 2 - 3 models to find best fit)
* Training on Costco locations (zip-codes)
* Using precision and recall

## Dashboard
The dashboard will be an interactive website. 
* Flask will be used to create JavaScript and HTML files.
  * Graphs, Maps, and Images

## Reference Material
(https://www.nytimes.com/2022/10/10/health/hearing-aids-fda.html)

(https://www.fortunebusinessinsights.com/industry-reports/hearing-aids-market-101573)

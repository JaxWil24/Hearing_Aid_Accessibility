# Hearing Aids and Costco 

The world of hearing health changed on Oct. 17, when the FDA’s new regulations, made quality hearing aids an over-the-counter product.  
A person would be able to walk into almost any pharmacy or big-box store and buy a sophisticated pair of hearing aids for a few hundred 
dollars, no prescription required.

The potential market is enormous. Self-perceived mild to moderate hearing loss, the condition that these devices are designed to address,
directly affects 23% of Americans aged 12 years or older. A 2018 study of Americans over 70 found that although hearing aid use had 
increased over several years, only 17 percent owned and used them, with still lower rates among low-income and Black respondents.

This legislation will impact a large percent of the 
population and providers, such as Costco.
                

![costcos_usa](https://user-images.githubusercontent.com/107228424/201243488-2323e73e-da2a-40cb-88d7-cd1250a7e45b.jpg)




## Project Outline

![Pipeline](https://user-images.githubusercontent.com/106329824/199831320-92068c49-9c88-4a62-8ea3-e39746a44c0d.png)



# Topic
"Costco’s hearing aid centers have been one of the biggest success stories in the hearing aid industry over the past decade. According to 
a 2017 report from Bernstein Research, sales at Costco hearing centers have grown at approximately 20% per year since 2011, with Costco 
expected   to account for 19% of all units sold in the U.S. retail market by 2021." - (https://www.hearingtracker.com/hearing-aids/costco)

Final Ruling Link
(https://www.federalregister.gov/documents/2022/08/17/2022-17230/medical-devices-ear-nose-and-throat-devices-establishing-over-the-counter-hearing-aids)

FDA News Release
(https://www.fda.gov/news-events/press-announcements/fda-finalizes-historic-rule-enabling-access-over-counter-hearing-aids-millions-americans)

![Costco](https://user-images.githubusercontent.com/106329824/198686685-262efbd1-3de0-4bf0-88a5-2c8d7df4ffd9.png)![otchearingaids](https://user-images.githubusercontent.com/106329824/199606602-171e9107-1f56-42ec-9bdd-1b2b28147a59.jpg)  



# Question
## Costco and hearing aid accessibility
How does the Legislation recently passed allowing over the counter (OTC) hearing aids allow Costco to increase accessibility?



![Untitled](https://user-images.githubusercontent.com/107228424/201964230-0c41b4d6-5ae1-49a5-af6a-ba3b9a9eb836.jpg)



# Technologies Used
![Technology_used](https://user-images.githubusercontent.com/107228424/200983007-9034c14a-1c72-4ae5-ae0b-7abbc7ed7ebd.jpg)




## Data Sourcing and Selection
Each teammate spent a full day researching data to contribute towards analysis. 

Data chosen: 
* ESRI 2019 Census Demographics
* ESRI 2021 ACS
* Costco Locations - Kaggle
* USPS zip code file with county, MSA cross reference

Data considered: 
* NIDCD Data


## Data Cleaning and Analysis
The cleaning and analyzing of the data included:
* Dropping irrelevant columns
* Creating consistency in label names
* Locating Costco hearing clinics
* Merging demographic, Costco and geographic data 

Using Pandas, a Python library, census data and Costco locations files were used to extract, transformed and load to csv 
files allowing for quick and simple analysis.


![pythonpandas](https://user-images.githubusercontent.com/106329824/198712252-15bc5708-b21f-42c9-962d-f5e414c02b97.jpg)



## Database Storage
AWS S3 Bucket has all the requirements for this analysis and will be used to store all the files and images for this project.

![AWS S3](https://user-images.githubusercontent.com/106329824/198686111-b3f238c1-1930-44ac-9c12-cb1bc2f3882d.jpg)


* Storing pictures, files, graphs, and more
* Easily accessible among teammates
* Connecting changing data to S3 Bucket
* Connects to machine learning through pyspark
* Easy to use on multiple platforms



## Machine Learning
The machine learning models (using Python's machine learning library scikit-learn)  

![ML](https://user-images.githubusercontent.com/106329824/198689906-7dbebcf9-14e0-456e-b50f-7dab7ee06345.jpg)


* Feature Engineering:
  - Dropped Costco locations that do not have hearing aid centers
  - Dropped age population younger than 20 and older than 69
  - Dropped all other demographic columns except education levels reached and household income columns  
 
* Data Split/Trained/Tested/Scaled:
  - Trained on Costco locations by zip-codes as our y and demographic columns for our features (X)
  - Using standard scaler, scaled our features to become identical in terms of the range so our columns could be compared

* Model choice:     
  * Competitive model structure - ran Logistic Regression, SMOTEENN, and RandomForest to find best predictor
  
  ![Smoteenn](https://user-images.githubusercontent.com/107228424/201185080-a5ca6f16-cc75-4fff-ba4b-1615ca6083b6.jpg)

* Results / Conclusion:
  - Smoteen algorithm had the best results of all three machine learning as it balances the 1's (Costco locations, minority class), 
    as well as the 0's (no Costco locations). This model may be good as additional information tool in determining a new store 
    location but is not a good application for this type of prediction.  Lowering the decision threshold from 50% to 10% to get a 
    higher precision or high recall ML model. This output maybe good as additional information tool in determining a new store location 
    but is not a good application for this type of prediction.
  - Logistic Regression predicted a binary outcome, 0 or 1. Unfortunately, it couldn’t predict optimal zip codes.
    + Accuracy: .98, although is very high, this a poor metric for the type of dataset we have. It’s only considering all the “yes, 
    costco location here” and not considering the other option “no, costco location here”.
  - Random Forest has the same limitations as Logistic Regression in as there are so few "yes'" it considers them irrelevant.  Dataset is
    imbalanced.
  - Results tables:
  
   ![ML_Results](https://user-images.githubusercontent.com/107228424/200046000-230dd27f-511d-4f92-811c-43c779d8c4cb.jpg) 
    
  - Feature engineering: our results point to our dataset needing additional look into additional data to predict new locations for CHC's.  
  - Additional data to consider:
    + Bucketing population data into decades or generations but keeping in mind not overfitting
    + Visualizing outliers to detect outliers
    + Adding % hearing impaired and hearing aid's cost
 

## Dashboard

The dashboard will be an interactive website. 
* Flask will be used to create JavaScript and HTML files.
  * Graphs, Maps, and Images
  
## Conclusion

* Refocus on how Costco can make affordable solutioins available to the hearing impaired.  
* Identify individuals with hearing impairment through online/web based hearing assessment tool. This would allow Costco to reach out to 
  their current customer base and those that may be outside Costco's physical location.  
* A web based and in store kiosk assessment along with demographic data allows for data gatering to create a prediction model. 

## Reference Material
•	https://www.nytimes.com/2022/10/10/health/hearing-aids-fda.html

•	https://hearingreview.com/inside-hearing/regulation/national-academies-sciences-release-report-hearing-aid-accessibility-affordability 

•	https://www.costco.com/warehouse-locations
 
•	https://www.scrapehero.com/location-reports/Costco-USA/

•	https://www.fortunebusinessinsights.com/industry-reports/hearing-aids-market-101573


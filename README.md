# Topic: Hearing_Aid_Accessibility
How does the need for over-the-counter hearing aids affect Costco? 


# Communication
  1. 1 hour Zoom meetings occuring 4 days a week to stay organized, work through road blocks and set next steps
  2. Meeting every Tuesday & Thursday from 6:30pm - 9:30pm


# Github

  1. Branch made for each member


# Machine Learning

  1. What we are trying or could potentially predict with our data. 
  2. To run 2 - 3 models for best fit. Will run Logistic Regression, RandomForest and K-means for 
     feature selection/PCA to determine: Where Costco does not have a Hearing Center and should have a location.  
     a. Training on: costco locations?  Binary output on yes / no costco in zip
  3. Precision and recall may be better determinates for a good model rather than accuracy.
  4. May need to add additional data if ML doesn't work with initial data.  Such as:
     a. price of OTC hearing aids in locations with a Costco vs areas without a Costco Or 
        price of OTC hearing aids at Costco vs Competitors
     b. increasing the zip codes "with" a Costco to those zip codes in a 10 mile radius of a Costco
 
 
# Database

  1. AWS S3 Bucket data repository for shared use of project files. Easy to share work and connect 
     to code files. 
     
     a. combined data table(s)
        * 3 csv files used for data in this project: 1) Costco locations with & without hearing aid center, 2) 2019 census 
          demographics & 3) 2021 census American Community survey data.  
        * Python, Pandas and jupyter notebook used to preprocess the data down to 34 columns x 32110 rows(zip codes)
     b. project notebooks
        * Preprocessing 
        * Machine Learning
        * Plotting/graphs (JavaScript/Html)
        * Images
        * API's
     c. Google slides (presentation)
     d. Final Readme


# Dashboard

  1. Using Flask template & create JavaScript & Html to create an interactive data visualization
  2. May also integrate Tableau for interactivity.
! Need an outline
     

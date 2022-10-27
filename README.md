# Topic: Hearing_Aid_Accessibility
How does the need for over-the-counter hearing aids affect Costco? 


# Communication
  1. Determined Jacqueline would be the organizer of group zoom meetings and calls.
  2. Zoom meetings occuring every 2 days or more to stay organized, work through road blocks and set next steps
  3. Agreed to meeting every Tuesday & Thursday at office hours through class time (unless emergency occurs)


# Github

  1. Branch made for each member


# Machine Learning

  1. Mocked up structured and unstructured notebooks to run 2 - 3 models for best fit
  2. Discussed what we are trying or could potential predict with our data. 
  3. Will run Logistic Regression, RandomForest and K-means for feature selection/PCA to determine:
     Where Costco does not have a Hearing Center and should have a location.  
?     a. Training on: costco locations?  Binary output on yes / no costco in zip?
  4. Precision and recall may be better determinates to for a good model rather than accuracy.
  5. May need to add additional data if ML doesn't work with initial data.  Such as:
     a. price of OTC hearing aids in locations with a Costco vs areas without a Costco Or 
        price of OTC hearing aids at Costco vs Competitors
     b. increasing the zip codes "with" a Costco to those zip codes in a 10 mile radius of a Costco
 
 
# Database

  1. Agreed upon using AWS S3 Bucket data repository for shared use of project files.  Easy to share work and connect 
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
     

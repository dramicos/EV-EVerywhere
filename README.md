# Project-3

### Produced by:
* Bryan Groves
* Randy Lam
* Rafael Lewis
* Arnold Schultz

# Overview:
This is a Dashboard that shows the location of electric vehicle charging stations around the U.S. by type and when it was in place.  You will be able to see how the number of charging stations have grown over the years.  There are also two plots showing the growth in the electric vehicle sales over time and how the ranges have improved as well.

This web site is run from a flask server and uses data stored in a PostgreSQL database to populate a Leaflet map and two Plotly graphs.

The database has the following schema:   


## Data Sets:

* Electric & Alternative Fuel Charging Stations 2022: 23.52 MB (1 file)
    * Link: https://www.kaggle.com/datasets/saketpradhan/electric-and-alternative-fuel-charging-stations?resource=download&select=Electric+and+Alternative+Fuel+Charging+Stations.csv
    * Description: Only the 'Electric and Alternative Fuel Charging Stations.csv' from the Data Explorer at the bottom of the page.

* Average Range and Efficiency of U.S Electric Vehicles: 24 KB
	* Link: https://afdc.energy.gov/data/10963
    * Description: An Excel file that provides driving range and efficiency factors of on-road electric vehicles in the United States in 2020, based on vehicle registration data.
	
* Global EV Data Explorer: 34 KB
	* Link:  https://www.iea.org/data-and-statistics/data-tools/global-ev-data-explorer
    * Description: EV sales selected from dropdown.  Download the CSV containing the sales of EVs in many countries from 2010 through 2021.

# Instructions required to run on your own system

1. Clone the Repo: 
1. Open ``pgAdmin`` ``PostgreSQL``
1. Create a new database named ``ev_db``.
1. Use the ``ev_DB_Table_Create.sql`` file to create the tables.
1. Run the next line in an environment that has ``pandas``, ``sqlalchemy``, ``numpy`` and using ``python 3.8``
1. Run ``jupyter notebook`` and open ``ev.ipynb``.
1. Verify and update as needed the ``username``, ``port`` and ``password`` in the ``LOAD`` section of the notebook to match your PostgreSQL credentials.
1. Run the notebook.
1. Now go to the repo directory where app.py is located and 


# References


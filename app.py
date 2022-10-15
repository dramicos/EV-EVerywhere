from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo
import json
import ev_ranges

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
conn = "mongodb://localhost:27017/ev_data"
mongo = PyMongo(app, uri = conn)

# Call function to populate ranges collection in mongo
ev_range = ev_ranges.ranges()
mongo.db.ranges.update_one({}, {"$set": ev_range}, upsert=True)

# Route to render index.html
@app.route("/")
def home():
    
    # Return template and data
    return render_template("index.html")


# Route that will plot the map
@app.route("/map")
def map():

    return render_template("map.html")


# # Route that will store the range json
@app.route("/ev-ranges")
def ReadMongoRanges():
    
    result = mongo.db.ranges.find()
    result_list = list(result)
    
    if len(result_list) > 0:
        # Return the first result only and strip off the '_id'
        data = result_list[0] 
        id_to_discard = data.pop('_id', None)
    else:
        # Construct an error message
        data = {'Error': 'No data found'}        

    print('Returning data from MongoDB')

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)

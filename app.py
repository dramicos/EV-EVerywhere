from flask import Flask, render_template, jsonify
import json

# Create an instance of Flask
app = Flask(__name__)

# Route to render index.html
@app.route("/")
def home():

    # Return template and data
    return render_template("index.html")


# Route that will plot the map
@app.route("/map")
def map():

    return render_template("map.html")


# Route that will stor the range json
@app.route("/data/<filename>")
def data(filename):
    
    filepath = f"Data/{filename}"
    try:
        with open(filepath) as f:
            json_data = json.load(f)
    except:
        json_data = {'Error' : f'{filename} not found on server'}


    return jsonify(json_data)

if __name__ == "__main__":
    app.run(debug=True)

import pandas as pd
import json
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template
from flask_cors import CORS

# Setup database


# Setup Flask
app = Flask(__name__)
#CORS(app)

# Flask main page
@app.route("/")
def index():
   return render_template("index.html")

# Flask run
if __name__ == "__main__":
    app.run(debug=True,port=9989,use_reloader=False)
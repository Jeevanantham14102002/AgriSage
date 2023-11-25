# from flask import Flask, request, jsonify
# import pandas as pd
# import json
# from flask_cors import CORS

# from pymongo import MongoClient


# app = Flask(_name_)
# cors = CORS(app)
# # Connect to MongoDB Atlas
# client = MongoClient('mongodb+srv://Arunachalam:Arunachalam@cluster0.umxzxzr.mongodb.net/Users?retryWrites=true&w=majority')
# db = client['Users']
# collection = db['details']

# # Route for adding a new user with email and password

# @app.route('/details', methods=['POST'])

# def signup():
#     email = request.json['email']
#     password = request.json['password']
#     collection.insert_one({'email': email, 'password': password})
#     return jsonify({'message': 'User added successfully'}), 200



# backend.py


from flask import Flask, request, jsonify
from flask_cors import CORS  # Add this for CORS support
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
client = MongoClient('mongodb+srv://Arunachalam:Arunachalam@cluster0.umxzxzr.mongodb.net/Users?retryWrites=true&w=majority')
db = client['Users']  # Replace 'your_database_name' with your actual database name
collection = db['signupasfarmer']  # Assuming you want to store farmer data in a 'farmers' collection

@app.route('/signup-farmer', methods=['POST'])
def signup_farmer():
    data = request.get_json()

    if 'email' in data and 'password' in data:
        email = data['email']
        password = data['password']

        # Perform validation here if needed

        farmer_data = {'email': email, 'password': password}
        collection.insert_one(farmer_data)
        return jsonify({'message': 'Farmer created successfully'}), 201
    else:
        return jsonify({'message': 'Invalid input'}), 400

if __name__ == '__main__':
    app.run(debug=True)

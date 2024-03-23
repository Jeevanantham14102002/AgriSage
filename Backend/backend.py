from flask import Flask, render_template, request, jsonify
from flask_cors import CORS  # Import the CORS extension
import os
import pandas as pd
import urllib
from pymongo import MongoClient


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Replace this path with the actual path to your CSV files
synthetic_area_folder = 'F://archieve(3)//daily_crop_data//Synthetic_area//'
final_prediction_folder = 'F://archieve(3)//daily_crop_data//final_prediction//'
client = MongoClient('mongodb+srv://Arunachalam:Arunachalam@cluster0.umxzxzr.mongodb.net/Users?retryWrites=true&w=majority')

db = client['Users']  # Replace 'your_database_name' with your actual database name
collection1 = db['signupasfarmer']  # Assuming you want to store farmer data in a 'farmers' collection
collection2 = db['signupasadmin'] 
collection3 = db['signupasuser'] 
collection4 = db['signupasfarmer']


@app.route('/signup-farmer', methods=['POST'])
def signup_farmer():
    data = request.get_json()

    if 'email' in data and 'password' in data:
        email = data['email']
        password = data['password']

        # Perform validation here if needed

        farmer_data = {'email': email, 'password': password}
        collection1.insert_one(farmer_data)
        return jsonify({'message': 'Farmer created successfully'}), 201
    else:
        return jsonify({'message': 'Invalid input'}), 400


@app.route('/signup-admin', methods=['POST'])
def signup_admin():
    data = request.get_json()

    if 'email' in data and 'password' in data:
        email = data['email']
        password = data['password']

        # Perform validation here if needed

        admin_data = {'email': email, 'password': password}
        collection2.insert_one(admin_data)
        return jsonify({'message': 'Admin created successfully'}), 201
    else:
        return jsonify({'message': 'Invalid input'}), 400
    

@app.route('/signup-user', methods=['POST'])
def signup_user():
    data = request.get_json()

    if 'email' in data and 'password' in data:
        email = data['email']
        password = data['password']

        # Perform validation here if needed

        user_data = {'email': email, 'password': password}
        collection3.insert_one(user_data)
        return jsonify({'message': 'User created successfully'}), 201
    else:
        return jsonify({'message': 'Invalid input'}), 400




@app.route('/loginasfarmer', methods=['POST','GET'])
def loginasfarmer():
    data = request.get_json()
    email = data['email']
    password = data['password']
    print(data)
    user = collection1.find_one({'email': email, 'password': password})

    if user:
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Data not found. Please check your credentials.'}), 404



@app.route('/loginasadmin', methods=['POST','GET'])
def loginasadmin():
    data = request.get_json()
    email = data['email']
    password = data['password']
    print(data)
    user = collection2.find_one({'email': email, 'password': password})

    if user:
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Data not found. Please check your credentials.'}), 404



@app.route('/loginas', methods=['POST','GET'])
def loginasuser():
    data = request.get_json()
    email = data['email']
    password = data['password']
    print(data)
    user = collection2.find_one({'email': email, 'password': password})

    if user:
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Data not found. Please check your credentials.'}), 404
    
@app.route('/crops')
def get_crop_names():
    crop_names = [os.path.splitext(file)[0] for file in os.listdir(synthetic_area_folder) if file.endswith('.csv')]
    return jsonify(crop_names)

@app.route('/market-price/<crop>')
def get_market_prices(crop):
    crop_name = urllib.parse.unquote(crop)
    print(crop_name)
    synthetic_data_path = os.path.join(synthetic_area_folder, f'{crop}.csv')
    final_prediction_path = os.path.join(final_prediction_folder, f'{crop}.csv')

    synthetic_data = pd.read_csv(synthetic_data_path)
    final_prediction = pd.read_csv(final_prediction_path)

    # Assuming Date and Market_Price columns exist in both dataframes
    synthetic_prices = synthetic_data[['District_Name','Date', 'Market_Price']].to_dict('records')
    final_prices = final_prediction[['District_Name','Date', 'Market_Price']].to_dict('records')

    response = jsonify({'synthetic_prices': synthetic_prices, 'final_prices': final_prices})

    # Enable CORS for this route
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:4200')

    return response
@app.route('/districts/<crop>')
def get_districts(crop):
    crop_name = urllib.parse.unquote(crop)
    synthetic_data_path = os.path.join(synthetic_area_folder, f'{crop_name}.csv')
    synthetic_data = pd.read_csv(synthetic_data_path)
    available_districts = synthetic_data['District_Name'].unique()
    return jsonify(list(available_districts))

@app.route('/get-farmers', methods=['GET'])
def get_farmers():
    farmers = list(collection1.find({}, {'_id': 0}))  # Exclude _id field from the result
    return jsonify(farmers)

@app.route('/get-admins', methods=['GET'])
def get_admins():
    admins = list(collection2.find({}, {'_id': 0}))  # Exclude _id field from the result
    return jsonify(admins)
# Define the route to get data for a specific district
@app.route('/data-for-district/<crop>/<district>')
def get_data_for_district(crop, district):
    crop_name = urllib.parse.unquote(crop)
    district_name = urllib.parse.unquote(district)
    
    synthetic_data_path = os.path.join(synthetic_area_folder, f'{crop_name}.csv')
    final_prediction_path = os.path.join(final_prediction_folder, f'{crop_name}.csv')

    synthetic_data = pd.read_csv(synthetic_data_path)
    final_prediction = pd.read_csv(final_prediction_path)

    # Assuming Date and Market_Price columns exist in both dataframes
    synthetic_data_district = synthetic_data[synthetic_data['District_Name'] == district_name]
    final_prediction_district = final_prediction[final_prediction['District_Name'] == district_name]

    synthetic_prices = synthetic_data_district[['Date', 'Market_Price']].to_dict('records')
    final_prices = final_prediction_district[['Date', 'Market_Price']].to_dict('records')

    response = jsonify({'synthetic_prices': synthetic_prices, 'final_prices': final_prices})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:4200')

    return response

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, render_template, request, jsonify
from flask_cors import CORS  # Import the CORS extension
import os
import pandas as pd
import urllib
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Replace this path with the actual path to your CSV files
synthetic_area_folder = 'F://archive (3)//daily_crop_data//Synthetic_area//'
final_prediction_folder = 'F://archive (3)//daily_crop_data//final_prediction//'

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

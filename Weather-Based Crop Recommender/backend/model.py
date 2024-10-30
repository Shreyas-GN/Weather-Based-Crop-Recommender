import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Load the data (replace 'crop_yield_data.csv' with your actual file path)
data = pd.read_csv("data/crop_yield_data.csv")

# Feature and target separation
X = data[["temperature", "rainfall", "humidity", "season"]]
y = data["crop"]

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

def recommend_crops(location, season):
    # Use placeholder values or actual weather data based on location
    temperature = 25
    rainfall = 200
    humidity = 80
    
    # Predict
    user_data = np.array([[temperature, rainfall, humidity, season]])
    recommendation = model.predict(user_data)
    
    return recommendation[0]
import streamlit as st
from model import recommend_crops

st.title("Weather-Based Crop Recommender")

location = st.text_input("Enter your location:")
season = st.selectbox("Select the season:", ["Spring", "Summer", "Autumn", "Winter"])

if st.button("Recommend Crop"):
    recommendation = recommend_crops(location, season)
    st.write(f"Recommended Crop: {recommendation}")
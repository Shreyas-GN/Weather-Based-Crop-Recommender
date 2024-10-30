import React, { useState } from "react";
import InputForm from "./components/InputForm";
import CropRecommendation from "./components/CropRecommendation";
import { getRecommendation } from "./services/api";
import "./App.css";

function App() {
  const [recommendation, setRecommendation] = useState("");

  const handleGetRecommendation = async (location, season) => {
    const result = await getRecommendation(location, season);
    setRecommendation(result);
  };

  return (
    <div className="App">
      <h1>Weather-Based Crop Recommender</h1>
      <InputForm onSubmit={handleGetRecommendation} />
      <CropRecommendation recommendation={recommendation} />
    </div>
  );
}

export default App;
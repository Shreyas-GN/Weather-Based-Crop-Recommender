import React from "react";

function CropRecommendation({ recommendation }) {
  return (
    <div>
      {recommendation && <h2>Recommended Crop: {recommendation}</h2>}
    </div>
  );
}

export default CropRecommendation;
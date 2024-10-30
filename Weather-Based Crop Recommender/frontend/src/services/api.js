import axios from "axios";

export const getRecommendation = async (location, season) => {
  try {
    const response = await axios.post("http://localhost:8501/recommend", {
      location,
      season,
    });
    return response.data.recommendation;
  } catch (error) {
    console.error("Error fetching recommendation:", error);
    return "Error retrieving recommendation";
  }
};
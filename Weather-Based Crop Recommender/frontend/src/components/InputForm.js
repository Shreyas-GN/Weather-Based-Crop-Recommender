import React, { useState } from "react";

function InputForm({ onSubmit }) {
  const [location, setLocation] = useState("");
  const [season, setSeason] = useState("Spring");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(location, season);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
      />
      <select value={season} onChange={(e) => setSeason(e.target.value)}>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
        <option value="Autumn">Autumn</option>
        <option value="Winter">Winter</option>
      </select>
      <button type="submit">Get Recommendation</button>
    </form>
  );
}

export default InputForm;
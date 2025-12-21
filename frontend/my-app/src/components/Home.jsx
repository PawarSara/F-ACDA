import { useState } from "react";
import "./Home.css";

function Home() {
  const [result, setResult] = useState(null);
  const [preview, setPreview] = useState(null);

  const fakeResponse = {
    disease: "Possible Leaf Blight",
    risk: "Medium",
    actions: [
      "Remove affected leaves",
      "Avoid excess watering",
      "Use approved fungicide"
    ],
    warning: "Do not exceed recommended pesticide dosage"
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const analyzeCrop = () => {
    setResult(fakeResponse);
  };

  return (
    <div className="container">
      <h1>Farmer AI Compliance & Disease Alert Agent (F-ACDA)</h1>
      <p className="subtitle">
        Upload a crop image to get instant disease & compliance guidance
      </p>

      <label>Crop Image</label>
      <div className="file-box">
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      {/* IMAGE PREVIEW */}
      {preview && (
        <div className="image-preview">
          <img src={preview} alt="Crop Preview" />
        </div>
      )}

      <button onClick={analyzeCrop}>Analyze Crop</button>

      {result && (
        <div id="result">
          <h3>Disease: {result.disease}</h3>

          <p>
            Risk Level:
            <span className={`risk ${result.risk.toLowerCase()}`}>
              {" "}
              {result.risk}
            </span>
          </p>

          <ul>
            {result.actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>

          <div className="warning">
            ⚠️ {result.warning}
          </div>
        </div>
      )}

      <div className="footer">
        Powered by Gemini • Vertex AI
      </div>
    </div>
  );
}

export default Home;

import { useState } from "react";

export default function Players() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleScore = () => {
    const runsUpdate = runs + 1;
    setRuns(runsUpdate);
  };

  const handleSixes = () => {
    const updateSixes = sixes + 1;
    setSixes(updateSixes);
    const runsUpdate = runs + 6;
    setRuns(runsUpdate);
  };

  const PlayersStyle = {
    border: "3px solid white",
    padding: "20px",
  };

  return (
    <div style={PlayersStyle}>
        <h3>Total Six : {sixes}</h3>
      <h3>Score :  {runs}</h3>

      <button
        style={{ fontSize: "20px", marginRight: "30px" }}
        onClick={handleScore}
      >
        One{" "}
      </button>

      <button style={{ fontSize: "20px", marginRight: "30px" }}>four </button>

      <button
        style={{ fontSize: "20px", marginRight: "30px" }}
        onClick={handleSixes}
      >
        six{" "}
      </button>
    </div>
  );
}

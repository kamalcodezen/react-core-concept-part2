import React, { useState } from "react";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  // console.log(country);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // setVisited(visited ? false : true);
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  const countryCss = {
    border: "1px solid cyan",
    // margin: "20px",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    // alignItem: "center",
    // justifyContent: "center",
    gap: "10px",
  };

  return (
    <div style={countryCss} className={`${visited && "country-visited"}`}>
      <img
        style={{ height: "100px", width: "200px", marginInline: "auto" }}
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <p>Name : {country.name.common}</p>
      <p>Region :{country.region.region}</p>
      <div style={{display : "flex"}}>
        <button className="country-btn" onClick={handleVisited}>
          {visited ? "Visited" : "Not visited"}
        </button>
        <button
          className="country-btn"
          onClick={() => {
            handleVisitedFlag(country.flags.flags.png);
          }}
        >
          Visited Flag
        </button>
      </div>
    </div>
  );
};

export default Country;

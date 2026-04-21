import React from "react";

const Country = ({ country }) => {
  console.log(country);

  const handleVisited = () => {
    console.log("button was clicked");
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
    <div style={countryCss}>
      <img
        style={{ height: "100px", width: "200px", marginInline: "auto" }}
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <p>Name : {country.name.common}</p>
      <p>Region :{country.region.region}</p>
      <button className="country-btn" onClick={handleVisited}>
        Clicked me
      </button>
    </div>
  );
};

export default Country;

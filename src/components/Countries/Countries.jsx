import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesFetch }) => {
  // api data promise use
  const countriesData = use(countriesFetch);
  const countries = countriesData.countries;

  // useState hook declare data ui update
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  // handleButton function
  const handleVisitedCountries = (country) => {
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  const handleVisitedFlag = (flag) => {
    setVisitedFlag([...visitedFlag, flag]);
  };

  return (
    <div>
      <h1>Countries : {countries.length}</h1>
      <h2>Visited Country : {visitedCountries.length}</h2>

      <ol>
        {visitedCountries.map((visitCountry) => (
          <li>{visitCountry.name.common}</li>
        ))}
      </ol>

      <ol>
        {visitedFlag.map((flag,ind) => (
          <img key={ind} style={{ height: "50px", width: "80px" }}
          src={flag}></img>
        ))}
      </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

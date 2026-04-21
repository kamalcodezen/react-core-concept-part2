import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesFetch }) => {
  const countriesData = use(countriesFetch);
  const countries = countriesData.countries;

  const [visitedCountries, setvisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log("visited button clicked", country);
  };

  return (
    <div>
      <h1>Countries : {countries.length}</h1>
      <h2>Visited Country : {visitedCountries}</h2>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesFetch }) => {
  const countriesData = use(countriesFetch);
  const countries = countriesData.countries;

  const [visitedCountries, setVisitedCountries] = useState([]);
 

  const handleVisitedCountries = (country) => {
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
    // console.log(visitedCountries);
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

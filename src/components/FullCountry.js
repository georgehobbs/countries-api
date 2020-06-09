import React, { useState, useEffect } from "react";
import restcountries from "../apis/restcountries";
import "./FullCountry.css";

function FullCountry(props) {
  const [countryData, setCountryData] = useState([]);
  const urlCountry = window.location.pathname.substr(1);
  const apiPath = props.abbr ? `/alpha/${props.abbr}` : `/alpha/${urlCountry}`;

  useEffect(async () => {
    const response = await restcountries.get(apiPath, {
      params: {},
    });
    setCountryData(response.data);
  }, []); // empty array prevents the hook activating on each re-render except the first.

  function clickBorder(e) {
    document.location.href = `/${e.target.innerHTML}`;
  }

  function goBack() {
    window.history.back();
  }

  return (
    <div className="full-country ui container">
      <div className="back-button">
        <button onClick={goBack} className="ui button">
          Back
        </button>
      </div>
      <div className="flag">
        <img src={countryData.flag} />
      </div>
      <div className="country-info">
        <h2>{countryData.name}</h2>
        <p>
          <label>Native Name: </label>
          {countryData.nativeName}
        </p>
        <p>
          <label>Population: </label>
          {countryData.population}
        </p>
        <p>
          <label>Region: </label>
          {countryData.region}
        </p>
        <p>
          <label>Sub Region: </label>
          {countryData.subregion}
        </p>
        <p>
          <label>Capital: </label>
          {countryData.capital}
        </p>
        <br />
        <br />
        <p>
          <label>Top Level Domain: </label>
          {countryData.topLevelDomain}
        </p>
        <p>
          <label>Currencies: </label>

          {countryData.currencies &&
            countryData.currencies.map(({ name }) => name).join(", ")}
        </p>
        <p>
          <label>Languages: </label>

          {countryData.languages &&
            countryData.languages.map(({ name }) => name).join(", ")}
        </p>
        <br />
        <br />
        <div className="borders">
          <h5>Border Countries: </h5>
          {countryData.borders &&
            countryData.borders.map((border) => (
              <button
                className="mini ui button border-button"
                onClick={clickBorder}
              >
                {border}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FullCountry;

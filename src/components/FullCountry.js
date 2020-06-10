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
    <div className="full-country">
      <div className="back-button">
        <button onClick={goBack} className="ui button">
          Back
        </button>
      </div>
      <div className="row">
        <div className="col-md-5 flag">
          <img src={countryData.flag} />
        </div>
        <div className="col-md-7 country-detail">
          <div className="row">
            <h2>{countryData.name}</h2>
          </div>
          <div className="row">
            <div className="col-md-6 country-info left">
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
            </div>
            <div className="col-md-6 country-info right">
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
            </div>
            <div class="row">
              <div className="borders">
                <p>
                  <label>Border Countries: </label>
                  {countryData.borders &&
                    countryData.borders.map((border) => (
                      <button
                        className="mini ui button border-button"
                        onClick={clickBorder}
                      >
                        {border}
                      </button>
                    ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullCountry;

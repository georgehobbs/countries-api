import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import "./CountryCard.css";

function CountryCard(props) {
  const countryLink = props.abbr.toUpperCase();

  return (
      <div className="card country-card">
        <div className="image">
          <img src={props.flag} />
        </div>
        <div className="content">
          <Link
            to={`/${countryLink}`}
            onClick={() => props.countrySelected(props.abbr)}
          >
            <h2>{props.country}</h2>
          </Link>
          <div className="description">
            <p className="popn">
              <strong>Population: </strong>
              {props.popn}
            </p>
            <p>
              <strong>Region: </strong>
              {props.region}
            </p>
            {props.capital && (
              <p>
                <strong>Capital: </strong>
                {props.capital}
              </p>
            )}
        </div>
      </div>
    </div>
  );
}

export default CountryCard;

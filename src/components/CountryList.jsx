import React from "react";
import CountryCard from "./CountryCard";

const CountryList = (props) => {
  const listOfCountries = props.countries.map((country) => {
    return (
      (props.selectedRegion === country.region ||
        props.selectedRegion === "All") && (
        <CountryCard
          key={country.index}
          country={country.name}
          abbr={country.alpha3Code}
          flag={country.flag}
          popn={country.population}
          region={country.region}
          capital={country.capital}
          countrySelected={props.selectedCountry}
        />
      )
    );
  });

  return <div className="ui cards">{listOfCountries}</div>;
};

export default CountryList;

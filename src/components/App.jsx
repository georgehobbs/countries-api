import React, { useState } from "react";
import restcountries from "../apis/restcountries";
import Header from "./Header";
import Filters from "./Filters";
import CountryList from "./CountryList";
import FullCountry from "./FullCountry";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    allCountries: [],
    filteredCountries: [],
    selectedRegion: "All",
    selectedCountry: "",
  };

  componentDidMount = async () => {
    const response = await restcountries.get("/all", {
      params: {},
    });
    this.setState({
      allCountries: response.data,
      filteredCountries: response.data,
    });
  };

  onTermSubmit = (term) => {
    this.setState({
      filteredCountries: this.state.allCountries.filter((country) => {
        return country.name.toLowerCase().startsWith(term);
      }),
    });
  };

  onRegionSelect = (regionSelected) => {
    this.setState({ selectedRegion: regionSelected });
  };

  renderFullCountry = (countryLink) => {
    this.setState({ selectedCountry: countryLink.toUpperCase() });
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <Filters
                  {...props}
                  onSearchChange={this.onTermSubmit}
                  selectedRegion={this.state.selectedRegion}
                  updateRegion={this.onRegionSelect}
                />
                <CountryList
                  {...props}
                  countries={this.state.filteredCountries}
                  selectedRegion={this.state.selectedRegion}
                  selectedCountry={this.renderFullCountry}
                />
              </div>
            )}
          />
          <Route
            path="/:countryCode"
            render={(props) => (
              <FullCountry {...props} abbr={this.state.selectedCountry} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;

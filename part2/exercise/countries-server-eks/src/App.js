import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [weathers, setWeathers] = useState([]);
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");
  const [showMore, setShowMore] = useState([]);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const API_URL = "http://api.weatherstack.com/current";

  // console.log("ini api key", process.env.REACT_APP_WEATHER_API_KEY);

  const getDataWeather = (msg) => {
    axios
      .get(API_URL, {
        params: {
          access_key: API_KEY,
          query: "Jakarta",
        },
      })
      .then((response) => {
        const data = response.data;
        setWeathers(data);
      });

    console.log("pesan", msg);
    return <h1>{msg}</h1>;
  };

  // console.log("cuaca ambil", weathers.location.country);

  useEffect(getDataWeather, []);

  const getData = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      const data = response.data;
      setCountries(data);
    });
  };

  useEffect(getData, []);

  // console.log("ini data country", countries);

  console.log("ini data weather", weathers);

  const handleButtonMore = (event) => {
    const data = event.target.dataset.mssg;
    let nomorIndex = parseInt(data);

    const population = countries[nomorIndex].population;

    setShowMore(population);

    console.log("bahasa var", [population]);

    alert(
      "INFO NEGARA : " +
        "\n" +
        countries[nomorIndex].name +
        "\n" +
        countries[nomorIndex].capital +
        "\n" +
        countries[nomorIndex].population +
        "\n" +
        countries[nomorIndex].translations.ja +
        "\n" +
        "\n" +
        "CUACA : " +
        "\n" +
        "Temperatur :" +
        weathers.current.temperature
    );
  };

  return (
    <div>
      <div className="header">
        <div className="header-titel">
          <h1>Countries Data {countries.length}</h1>
        </div>

        <div className="header-search">
          <input
            placeholder="cari negara"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>

      <div className="content">
        {countries
          .filter((country) => {
            if (!value) return true;
            if (
              country.name.toLowerCase().includes(value) ||
              country.name.toLowerCase().includes(value) ||
              country.name.toUpperCase().includes(value) ||
              country.name.toUpperCase().includes(value) ||
              country.capital.toLowerCase().includes(value) ||
              country.capital.toLowerCase().includes(value) ||
              country.capital.toUpperCase().includes(value) ||
              country.capital.toUpperCase().includes(value)
            ) {
              return true;
            }
          })
          .map((country, index) => (
            <>
              <div className="item-content">
                <h3 key={country.key}>{country.name}</h3>
                <img key={country.key} src={country.flag} width="50" />

                <div className="bahasa">
                  <h4>Bahasa :</h4>
                  {country.languages.map((bahasa) => (
                    <>
                      <p> {bahasa.name}</p>
                    </>
                  ))}
                </div>

                {/* <p>Populasi : {country.population}</p> */}
                <p msg={country.capital}>Ibu kota : {country.capital}</p>

                <button onClick={handleButtonMore} data-mssg={index}>
                  Show More
                  {/* {country.callingCodes} */}
                </button>

                {/* <p>{showMore}</p> */}
                {/* {console.log("setShowMore", setShowMore)} */}

                {/* <getDataWeather msg={country.capital} /> */}
              </div>
            </>
          ))}

        {/* <div className="cuaca">
          <h4>Temperature : {weathers.current.temperature}</h4>
          <img src={weathers.current.weather_icons} />
          <h4>Wind : {weathers.current.wind_speed}</h4>
        </div> */}
      </div>
    </div>
  );
}

export default App;

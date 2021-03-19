import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");
  const [showMore, setShowMore] = useState("");

  // console.log("ini index country", countries[1]);

  const getData = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      const data = response.data;
      setCountries(data);
    });
  };

  useEffect(getData, []);

  const handleButtonMore = (event) => {
    const data = event.target.dataset.mssg;
    let nomorIndex = parseInt(data);
    // console.log("index data..", nomorIndex);

    // setShowMore(countries[nomorIndex]);

    // console.log("ini negara index", countries[nomorIndex]);

    alert(
      countries[nomorIndex].name +
        " " +
        countries[nomorIndex].capital +
        " " +
        countries[nomorIndex].population +
        " " +
        countries[nomorIndex].translations.ja
    );
  };

  return (
    <div>
      <div className="header">
        <div className="header-titel">
          <h1>Countries Data {countries.length}</h1>
          {/* <p>ini show more : {setShowMore}</p>
          {console.log("showmore", setShowMore)} */}
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

                <p>Populasi : {country.population}</p>
                <p>Ibu kota : {country.capital}</p>

                <button onClick={handleButtonMore} data-mssg={index}>
                  Show More {country.callingCodes}
                </button>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}

export default App;

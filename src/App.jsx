import React, { useState } from "react";
import "./app.css";
import axios from "axios";

const api_key = "61d7518ff00a642bdfd0530b99dc36ad";

const App = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [cludeType, setCludeType] = useState();

  const handleCityName = (e) => {
    setCity(e.target.value);
  };

  const handleGetWeather = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
      )
      .then((res) => {
        setWeather(res.data);
        console.log(weather);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleFormSubmit = (e) => {
    handleGetWeather(e);
  };

  return (
    <main>
      <div className="text-center">
        <form onSubmit={handleFormSubmit}>
          <div className="weather-container">
            <input
              type="text"
              placeholder="City Name..."
              value={city}
              onChange={handleCityName}
            />
          </div>
          <button type="submit">Get Report</button>
        </form>
        {weather && (
          <div>
            <h3>{weather.name}</h3>
            <p>
              {weather.main.temp.toFixed()} ^C ({weather.weather[0].description}
              )
            </p>
            <i>Humidity: {weather.main.humidity}%</i>
          </div>
        )}
      </div>
      {weather && (
        <div className="text-end">
          {weather.weather[0].description === "mist" ? (
            <img
              src="https://i.pinimg.com/originals/95/bd/33/95bd334eb5286ee5bebec0401dd3c9bf.gif"
              alt=""
            />
          ) : (
            ""
          )}
          {weather.weather[0].description === "haze" ? (
            <img src="https://j.gifs.com/v1A7LP.gif" alt="haze" />
          ) : (
            ""
          )}
          {weather.weather[0].description === "broken clouds" ? (
            <img
              src="https://img1.picmix.com/output/stamp/normal/1/0/3/7/1257301_96e90.gif"
              alt="haze"
            />
          ) : (
            ""
          )}

          {weather.weather[0].description === "overcast clouds" ? (
            <img
              src="https://i.pinimg.com/originals/b3/b4/8a/b3b48a35785465ed53f20d332f191a5c.gif"
              alt="cloude"
            />
          ) : (
            ""
          )}
        </div>
      )}
    </main>
  );
};

export default App;

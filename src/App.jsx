import { useState, useEffect } from "react";
import "./App.css";
import CardInfo from "./components/CardInfo";
import SearchBar from "./components/SearchBar";

function App() {
  const url = import.meta.env.VITE_API_URL;
  const key = import.meta.env.VITE_API_KEY;

  const [city, setCity] = useState("Quito");
  const [weather, setWeather] = useState();

  // Url to fetch
  const finalUrl = `${url}key=${key}&q=${city}&aqi=no`;
  //Async function
  async function getInfo() {
    const response = await fetch(finalUrl);
    const parsedResponse = await response.json();
    return parsedResponse;
  }

  const cityHandler = (nameCity) => {
    setCity(nameCity);
  };

  useEffect(() => {
    //Call to async function
    getInfo().then((response) => setWeather(response));
    console.log(weather);
  }, []);

  useEffect(() => {
    //Call to async function
    getInfo().then((response) => setWeather(response));
    console.log(weather);
  }, [city]);

  return (
    <div className="App">
      <SearchBar setChange={cityHandler} />
      {weather && (
        <CardInfo
          title={weather.location.name}
          country={weather.location.country}
          urlImage={weather.current.condition.icon}
          textIcon={weather.current.condition.text}
          temp={weather.current.temp_c}
          lon={weather.location.lon}
          lat={weather.location.lat}
        />
      )}
    </div>
  );
}

export default App;

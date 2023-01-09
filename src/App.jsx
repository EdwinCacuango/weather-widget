import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const url = import.meta.env.VITE_API_URL;
  const key = import.meta.env.VITE_API_KEY;

  const [city, setCity] = useState("Quito");
  const [weather, setWeather] = useState("");

  const cityHandler = (nameCity) => {
    setCity(nameCity);
  };

  useEffect(() => {
    const finalUrl = `${url}key=${key}&q=${city}&aqi=no`;

    //Function
    async function getInfo() {
      const response = await fetch(finalUrl);
      const parsedResponse = await response.json();
      return parsedResponse;
    }

    getInfo().then((response) => setWeather(response));
    console.log(weather);
  }, [city]);

  return (
    <div className="App">
      <SearchBar setChange={cityHandler} />
      {/* {list.location.name} */}
    </div>
  );
}

export default App;

import "./App.css";

import Template from "./components/Template";
import Temp from "./components/Temp";
import fetchDataFromApi from "./utils/api";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState();
  const [query, setQuery] = useState();
  const [endpoint, Setendpoint] = useState();
  useEffect(() => {
    if (endpoint) {
      fetchWeatherResults();
      setQuery("");
      Setendpoint("");
    }
  }, [endpoint]);

  const fetchWeatherResults = () => {
    fetchDataFromApi(`${endpoint}`).then((res) => {
      console.log(res);
      setData(res);
    });
  };

  const searchQueryHander = (e) => {
    if (query) {
      Setendpoint(query);
    }
    setQuery("");
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      if (query) {
        Setendpoint(query);
      }
    }
  };
  console.log(data);
  const time = data?.location?.localtime;
  const dateTime = new Date(time);
  const day = dateTime.getTime();
  const month = dateTime.toLocaleString("default", { month: "long" });
  const year = dateTime.getFullYear();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[dateTime.getDay()];
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();

  return (
    <div className="App">
      <h1 className="appTitle">Weather App</h1>
      <div className="container">
        <div className="leftContent">
          <div className="mainHeader">
            <div className="todayDate">
              {time && (
                <>
                  <span className="monthYear">
                    {month} {year}
                  </span>
                  <span className="dateMonthYear">
                    {" "}
                    {dayName},{month},{year}
                  </span>
                </>
              )}
            </div>
            <header>
              <span className="inputSection">
                <input
                  type="search"
                  onKeyUp={handleEnterKey}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  value={query}
                  placeholder="Search location here"
                />
                <button onClick={searchQueryHander}>search</button>
              </span>
            </header>
          </div>
          {data && (
            <>
              <div className="textTitle">Today's overview</div>
              <div className="resultSection">
                <div className="textContent">
                  <Temp data1={data?.current} />
                </div>
              </div>
            </>
          )}
        </div>
        {data && (
          <>
            <div className="rightContent">
              <div className="rightHeader">
                <div className="locationTime">
                  {time && (
                    <>
                      <span>{data?.location?.name}</span>
                      <span>
                        {hours}:{minutes}
                      </span>
                    </>
                  )}
                </div>
                <div className="temperature">
                  <div className="templogoNum">
                    <img src={data?.current?.condition?.icon} alt="" />
                  </div>
                  <div className="tempInfo">
                    {data && (
                      <>
                        <span className="numberdeg">
                          {data?.current?.temp_c + "\u2103"}{" "}
                        </span>
                        <span> {data?.current?.condition?.text}</span>
                      </>
                    )}
                  </div>
                </div>
                <hr />
              </div>
              <div className="sunriseSunset">
                <div className="hhh">Sunrise & Sunset</div>
                <Template
                  data2={data?.forecast?.forecastday[0]?.astro}
                  sunrise={true}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

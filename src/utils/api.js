import axios from "axios";

const BASE_URL = " http://api.weatherapi.com/v1/forecast.json";

const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      key: import.meta.env.VITE_APP_WEATHER_KEY,
      Authorization: "bearer ",
      q: `/${url}`,
    },
  });
  return data;
};

export default fetchDataFromApi;

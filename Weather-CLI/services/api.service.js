import axios from "axios";
import { getValueByKey } from "./storage.service.js";

export const getWeather = async () => {
  const token = await getValueByKey("token");
  const city = await getValueByKey("city");
  if (!token) {
    throw new Error(
      "Token is missing. Add your token using -t [TOKEN-KEY] command"
    );
  }

  if (!city) {
    throw new Error(
      "City is missing. Add your token using -s [CITY-NAME] command"
    );
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        units: "metric",
        lang: "bg",
      },
    }
  );
  return data;
};

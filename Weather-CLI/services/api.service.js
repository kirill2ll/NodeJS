import axios from "axios";
import { getValueByKey } from "./storage.service.js";

export const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";
    case "02":
      return "🌤️";
    case "03":
      return "☁️";
    case "04":
      return "☁️";
    case "09":
      return "🌧️";
    case "10":
      return "🌦️";
    case "11":
      return "🌩️";
    case "13":
      return "❄️";
    case "50":
      return "🌫️";
  }
};

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
        lang: "en",
      },
    }
  );
  return data;
};

import axios from "axios";
import { getValueByKey } from "./storage.service.js";

export const getWeather = async (city) => {
  const token = await getValueByKey("token");
  if (!token) {
    throw new Error(
      "Token is missing. Add your token using -t [TOKEN-KEY] command"
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
  console.log(data);
  return data;
};

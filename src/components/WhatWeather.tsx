import { WiCloudy } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiNightClear } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";

export const whatWeather = (day: string, w: string) => {
  const weatherDay = day;

  if (weatherDay === "Clouds") {
    return <WiCloudy size={w} />;
  }
  if (weatherDay === "Rain") {
    return <WiRain size={w} />;
  }
  if (weatherDay === "Clear") {
    return <WiNightClear size={w} />;
  }
  if (weatherDay === "Thunderstorm") {
    return <WiThunderstorm size={w} />;
  }
  if (weatherDay === "Snow") {
    return <WiSnow size={w} />;
  }
};

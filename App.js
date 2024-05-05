import { StatusBar } from "expo-status-bar";
import AppNavigation from "./app/navigation/appNavigation";

import { WEATHER_API_KEY } from "@env";

const App = () => {
  // console.log(WEATHER_API_KEY);
  // useEffect(() => {
  //   console.log("App mounted");
  //   fetch(
  //     `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=London&aqi=no`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // }, []);
  return <AppNavigation />;
};

export default App;

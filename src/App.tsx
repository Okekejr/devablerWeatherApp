import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Weather } from "./types/weather";

function App() {
  const [data, setData] = useState<Weather["weatherData"]>([]);

  // useEffect(() => {
  //   request("ottawa");
  // }, []);

  const request = async function (city: string) {
    try {
      // using gecoding to get latitude and longitude coordinates
      const location = await fetch(`https://geocode.xyz/${city}?json=1`);
      const cords = await location.json();
      const lat = cords.latt;
      const lon = cords.longt;

      // requesting the weather using the data from the geocode
      const APIKEY = "e4e8a38e9749c6c32501f0c3ed976e93";
      const weather = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${APIKEY}`
      );

      //converting response to json
      const data = weather.json();
      const weatherData = await data;

      // set data
      setData(weatherData);

      // catching and displaying error gotten from the API search as a prompt
      if (!weather.ok) throw new Error(`${weatherData.error.message}`);
    } catch (error) {
      alert(error);
    }
  };

  const clicked = (event: React.MouseEvent<HTMLElement>) => {
    const city = event.currentTarget.innerHTML;
    request(city);
  };

  return (
    <Box backgroundColor="appBackground">
      <Flex flexDirection="column" minHeight="100vh" alignItems="center">
        <Box minWidth="40rem" mb="2rem">
          <Flex justifyContent="space-around">
            <Text onClick={clicked} color="blue" cursor="pointer">
              OTTAWA
            </Text>
            <Text onClick={clicked} cursor="pointer">
              MOSCOW
            </Text>
            <Text onClick={clicked} cursor="pointer">
              TOKYO
            </Text>
          </Flex>
        </Box>
        <Dashboard data={data} />
      </Flex>
    </Box>
  );
}

export default App;

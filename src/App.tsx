import {
  Box,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Weather } from "./types/weather";
import { CiSearch } from "react-icons/ci";

function App() {
  const [data, setData] = useState<Weather["weatherData"]>([]);
  const [search, setSearch] = useState("");

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
      if (!weather.ok)
        throw new Error(
          "wait a brief moment before each query due to api query speed"
        );
    } catch (error) {
      alert(error);
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    request(search);
    setSearch('')
  };

  const onChangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const city = event.currentTarget.value;
    setSearch(city);
  };

  return (
    <Box >
      <Flex
        flexDirection="column"
        minHeight="100vh"
        alignItems="center"
        marginTop="2rem"
      >
        <Box minWidth="30rem" mb="2rem">
          <form onSubmit={submitHandler}>
            <FormControl>
              <InputGroup>
                <Input
                  type="text"
                  value={search}
                  onChange={onChangehandler}
                  required={true}
                />
                <InputRightElement children={<CiSearch />} />
              </InputGroup>
            </FormControl>
          </form>
        </Box>
        <Dashboard data={data} />
      </Flex>
    </Box>
  );
}

export default App;

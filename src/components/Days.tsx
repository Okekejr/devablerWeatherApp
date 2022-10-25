import { Box, Flex, FlexProps, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Current, DailyEntity } from "../types/weather";
import { whatDay } from "./WhatDay";
import { whatWeather } from "./WhatWeather";
import { WiCloudy } from "react-icons/wi";

interface Props extends FlexProps {
  data: {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: Current;
    daily?: DailyEntity[] | null;
  }[];
}

export const Days: FC<Props> = ({ data, ...rest }) => {
  const items = Object.assign(data);
  const { current } = items;
  console.log(items);

  const todayTemp = current?.temp?.toFixed(0);
  const todayDesc = current?.weather[0].main;

  // extracting daily data timestamp from API
  const daily1 = items?.daily?.[1].dt;
  const daily2 = items?.daily?.[2].dt;
  const daily3 = items?.daily?.[3].dt;
  const daily4 = items?.daily?.[4].dt;

  // extracting daily temp from API
  const dailyTemp1 = items?.daily?.[1].temp?.day.toFixed(0);
  const dailyTemp2 = items?.daily?.[2].temp?.day.toFixed(0);
  const dailyTemp3 = items?.daily?.[3].temp?.day.toFixed(0);
  const dailyTemp4 = items?.daily?.[4].temp?.day.toFixed(0);

  // extracting weather description for daily from API
  const dailyDesc1 = items?.daily?.[1].weather?.[0].main;
  const dailyDesc2 = items?.daily?.[2].weather?.[0].main;
  const dailyDesc3 = items?.daily?.[3].weather?.[0].main;
  const dailyDesc4 = items?.daily?.[4].weather?.[0].main;

  if (items.length === 0) {
    return (
      <Flex
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        {...rest}
      >
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <Box>
            <Flex
              backgroundColor="primary.bgColor"
              flexDirection="column"
              justifyContent="center"
              align="center"
              width="38.2rem"
              height="15rem"
              borderTopLeftRadius="10px"
              borderTopRightRadius="10px"
              mb="0.3rem"
            >
              <Text fontWeight="thin" fontSize="1.5rem">
                Today
              </Text>
              <Flex justifyContent="center" alignItems="center">
                <WiCloudy size="9rem" />
                <Flex flexDirection="column">
                  <Text fontSize="2rem">10°c</Text>
                  <Text fontWeight="thin" fontSize="1.2rem">
                    Cloudy
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Flex
              backgroundColor="primary.bgColor"
              borderBottomLeftRadius="10px"
              flexDirection="column"
              justifyContent="center"
              align="center"
              width="9rem"
              height="12rem"
            >
              <Text fontWeight="thin">Today</Text>
              <WiCloudy size="6rem" />
              <Text fontWeight="bold" fontSize="1.3rem">
                19°c
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex
              backgroundColor="primary.bgColor"
              flexDirection="column"
              justifyContent="center"
              align="center"
              width="9.5rem"
              height="12rem"
            >
              <Text fontWeight="thin">Today</Text>
              <WiCloudy size="6rem" />
              <Text fontWeight="bold" fontSize="1.3rem">
                19°c
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex
              backgroundColor="primary.bgColor"
              flexDirection="column"
              justifyContent="center"
              align="center"
              width="9.5rem"
              height="12rem"
            >
              <Text fontWeight="thin">Today</Text>
              <WiCloudy size="6rem" />
              <Text fontWeight="bold" fontSize="1.3rem">
                19°c
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex
              backgroundColor="primary.bgColor"
              borderBottomRightRadius="10px"
              flexDirection="column"
              justifyContent="center"
              align="center"
              width="9.5rem"
              height="12rem"
            >
              <Text fontWeight="thin">Today</Text>
              <WiCloudy size="6rem" />
              <Text fontWeight="bold" fontSize="1.3rem">
                19°c
              </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }

  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
      {...rest}
    >
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        <Box>
          <Flex
            backgroundColor="primary.bgColor"
            flexDirection="column"
            justifyContent="center"
            align="center"
            width="38.2rem"
            height="15rem"
            borderTopLeftRadius="10px"
            borderTopRightRadius="10px"
            mb="0.3rem"
          >
            <Text fontWeight="thin" fontSize="1.5rem">
              Today
            </Text>
            <Flex justifyContent="center" alignItems="center">
              {whatWeather(todayDesc, "8rem")}
              <Flex flexDirection="column">
                <Text fontWeight="bold" fontSize="2rem">
                  {todayTemp}°c
                </Text>
                <Text fontWeight="thin" fontSize="1.2rem">
                  {todayDesc}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Flex
            backgroundColor="primary.bgColor"
            borderBottomLeftRadius="10px"
            flexDirection="column"
            justifyContent="center"
            align="center"
            width="9rem"
            height="12rem"
          >
            <Text fontWeight="thin">{whatDay(daily1)}</Text>
            {whatWeather(dailyDesc1, "6rem")}
            <Text fontWeight="bold" fontSize="1.3rem">
              {dailyTemp1}°c
            </Text>
          </Flex>
        </Box>
        <Box>
          <Flex
            backgroundColor="primary.bgColor"
            flexDirection="column"
            justifyContent="center"
            align="center"
            width="9.5rem"
            height="12rem"
          >
            <Text fontWeight="thin">{whatDay(daily2)}</Text>
            {whatWeather(dailyDesc2, "6rem")}
            <Text fontWeight="bold" fontSize="1.3rem">
              {dailyTemp2}°c
            </Text>
          </Flex>
        </Box>
        <Box>
          <Flex
            backgroundColor="primary.bgColor"
            flexDirection="column"
            justifyContent="center"
            align="center"
            width="9.5rem"
            height="12rem"
          >
            <Text fontWeight="thin">{whatDay(daily3)}</Text>
            {whatWeather(dailyDesc3, "6rem")}
            <Text fontWeight="bold" fontSize="1.3rem">
              {dailyTemp3}°c
            </Text>
          </Flex>
        </Box>
        <Box>
          <Flex
            backgroundColor="primary.bgColor"
            borderBottomRightRadius="10px"
            flexDirection="column"
            justifyContent="center"
            align="center"
            width="9.5rem"
            height="12rem"
          >
            <Text fontWeight="thin">{whatDay(daily4)}</Text>
            {whatWeather(dailyDesc4, "6rem")}
            <Text fontWeight="bold" fontSize="1.3rem">
              {dailyTemp4}°c
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

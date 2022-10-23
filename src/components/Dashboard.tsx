import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Weather } from "../types/weather";

interface Props extends BoxProps {
  data: Weather['weatherData'];
}

export const Dashboard: FC<Props> = ({ ...rest }) => {
  return (
    <Box
      backgroundColor="primary.100"
      boxShadow="1px 6px 4px 7px rgba(0, 0, 0, 0.1)"
      borderRadius="15px"
      borderColor="primary.100"
      borderWidth="1px"
      minHeight="20rem"
      maxWidth="39rem"
      padding="5px"
      {...rest}
    >
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        <Box>
          <Flex
            backgroundColor="primary.bgColor"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            width="38.2rem"
            height="15rem"
            borderTopLeftRadius="10px"
            borderTopRightRadius="10px"
            mb="0.3rem"
          >
            <Text>Today</Text>
            <Text>19°c</Text>
          </Flex>
        </Box>
        <Box>
          <Flex
            backgroundColor="primary.bgColor"
            borderBottomLeftRadius="10px"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            width="9rem"
            height="12rem"
          >
            <Text>Today</Text>
            <Text>19°c</Text>
          </Flex>
        </Box>
        <Box>
          <Flex
            backgroundColor="primary.bgColor"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            width="9rem"
            height="12rem"
          >
            <Text>Today</Text>
            <Text>19°c</Text>
          </Flex>
        </Box>
        <Box>
          <Flex
            backgroundColor="primary.bgColor"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            width="9rem"
            height="12rem"
          >
            <Text>Today</Text>
            <Text>19°c</Text>
          </Flex>
        </Box>
        <Box>
          <Flex
            backgroundColor="primary.bgColor"
            borderBottomRightRadius="10px"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            width="10rem"
            height="12rem"
          >
            <Text>Today</Text>
            <Text>19°c</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

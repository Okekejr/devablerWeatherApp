import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { Dashboard } from "./components/Dashboard";

function App() {
  const clicked = (event: React.MouseEvent<HTMLElement>) => {
    const city = event.currentTarget.innerHTML;
  };
  return (
    <Box backgroundColor="appBackground">
      <Flex
        flexDirection="column"
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Box minWidth="40rem" mb="2rem">
          <Flex justifyContent="space-around">
            <Text onClick={clicked} cursor="pointer">
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
        <Dashboard />
      </Flex>
    </Box>
  );
}

export default App;

import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";
import { Weather } from "../types/weather";
import { Days } from "./Days";

interface Props extends BoxProps {
  data: Weather["weatherData"];
}

export const Dashboard: FC<Props> = ({ data, ...rest }) => {
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
      <Days data={data} />
    </Box>
  );
};

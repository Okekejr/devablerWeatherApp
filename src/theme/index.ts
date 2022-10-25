import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import { styles } from "./styles";
import { fonts } from "./Fonts";

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  sizes: {
    container: {
      xl: "1448px",
    },
  },
  fonts,
  colors,
});

export default theme;

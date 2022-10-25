import { Global } from "@emotion/react";

export const fonts = {
  heading:
    "'Sora', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'sans-serif'",
  body: "'Sora', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'sans-serif'",
};

export const FontFaces = () => (
  <Global
    styles={`

      @font-face {
        font-family: 'Sora';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(assets/fonts/Sora-Regular.ttf) format('tff');
      }

      @font-face {
        font-family: 'Sora';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url(/assets/fonts/Sora-Bold.ttf) format('tff');
      }

      @font-face {
        font-family: 'Sora';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(/assets/fonts/Sora-Thin.ttf) format('tff');
      }
    `}
  />
);

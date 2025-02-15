import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  body {
      background-image: linear-gradient(
    315deg,
    hsl(70deg 60% 66%) 0%,
    hsl(82deg 54% 67%) 6%,
    hsl(95deg 47% 67%) 12%,
    hsl(111deg 39% 68%) 18%,
    hsl(129deg 34% 66%) 25%,
    hsl(143deg 32% 63%) 31%,
    hsl(153deg 29% 61%) 38%,
    hsl(162deg 31% 62%) 45%,
    hsl(169deg 33% 63%) 52%,
    hsl(176deg 33% 65%) 60%,
    hsl(182deg 34% 67%) 69%,
    hsl(187deg 38% 71%) 79%,
    hsl(191deg 40% 74%) 100%
  );
  height: 100%;
  width: 100%;
  background-repeat: no-repeat; 
  background-attachment: fixed; 
  background-size: cover; 
  }
  `;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 62.5%;
  }

  :root {
    --font-main: 'Poppins', sans-serif;
    --font-secondary: 'Roboto', sans-serif;

    --background-color: ${({ theme }) => theme.COLORS.DARK_100};
    --font-color: ${({ theme }) => theme.COLORS.LIGHT_100}
  }

  body {
    background-color: var(--background-color);
    color: var(--font-color);
    --webkit-font-smoothing: antialiased;
  }

  body,
  input {
    font-family: var(--font-main);
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  button,
  a {
    cursor: pointer;
    transition: filter 0.2s;
  }
`;

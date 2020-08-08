import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: rgb(21, 32, 43);
    --color-text-primary: #FFFFFF;
    --color-text-secondary: #8899a6;
    --color-link-hover: rgb(29, 161, 242, 0.1);
    --color-blue-primary: rgb(29, 161, 242);
    --color-blue-primary-hover: rgb(26, 145, 218);
    --color-border: #464646;
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
  }

  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-background);
    color: var(--color-text-primary);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.5rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: var(--color-text-primary);
  }

  /* Tablet */
  @media (max-width: 1080px) {
    html {
      font-size: 58%;
    }
  }

  /* Mobile */
  @media (max-width: 720px) {
    html {
      font-size: 54%;
    }
  }
`;

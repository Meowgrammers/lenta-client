import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --blue-main: #003D96;
    --text-secondary: #ffffff;
    --button: #3B82F6;
    --chart: #2563EB;
  }

  html,
  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    min-width: 20rem;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5rem;
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
  }
  #root {
    width: 100%;
    height: 100%;
  }
`

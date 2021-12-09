import {
  createGlobalStyle
} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit
}
body{
  margin: 0;
  padding: 0;
  background-color: #010001;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  color: white;
}

img {
max-width: 100%;
height: auto;
}

button {
  cursor: pointer;
}

input, button {
  font-family: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
h1, h2, h3 {
  font-family: Pacifico;
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}`;
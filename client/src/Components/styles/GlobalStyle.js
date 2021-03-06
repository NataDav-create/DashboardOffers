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
  background-color: #fff;
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
  font-family: Roboto, sans-serif;
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: none;
  width: 250px;
  height: 65px;
  background-color: #299b01;
  border-color: transparent;
  color: white;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  cursor: pointer;
  transition-property: color, background-color, border-color;
  transition-duration: 0.3s;
  &:hover {
    background-color: #fff;
    color: #299b01;
    border: 1px solid #299b01;
  }
}

table {
  width: 100%;
  margin-left: 50px;
  color: black;
    border-spacing: 0;
    font-size: 12px;
    margin-bottom: 40px;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
  .date {
    display: inline-block;
    margin-bottom: 30px;
    margin-left: 50px;
    margin-right: 0;
  }

`;
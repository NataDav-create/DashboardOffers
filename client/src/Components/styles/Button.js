import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  outline: none;
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
    border-color: #299b01;
  }
`;

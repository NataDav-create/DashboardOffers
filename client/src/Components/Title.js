import React from 'react';
import { BiBrightness } from 'react-icons/bi';
import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .title {
    color: #2d9e26;
    margin-bottom: 10px;
  }
  .icon {
    color: black;
    font-size: 1.4rem;
    svg {
      color: #2d9e26;
      transition: transform 0.5s ease-in-out;
      &:hover {
        transform: rotate(90deg) scale(1.3);
      }
    }
  }
`;

export default function Title({ title, subTitle }) {
  return (
    <TitleContainer>
      <div className="title">
        <h2> {title} </h2> <h4> {subTitle} </h4>{' '}
      </div>{' '}
      <div className="icon">
        <BiBrightness />
      </div>{' '}
    </TitleContainer>
  );
}

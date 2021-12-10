import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionCenter = styled.div`
  padding: 5rem 0;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 50px;
  text-align: center;
  margin-bottom: 30px;
`;

export const NewOffersComponent = ({ offers, setOffers }) => {
  console.log(offers);
  return (
    <SectionCenter>
      <Title>Here NewOfferComponent</Title>
      <Link to="/" className="btn">
        back home
      </Link>
    </SectionCenter>
  );
};

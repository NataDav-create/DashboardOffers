import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionCenter = styled.div`
  padding: 5rem 0;
  /* padding-left: 8rem; */
  width: calc(100% - 15rem);
  margin-left: 17rem;
  max-width: 1170px;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 50px;
  text-align: center;
  margin-bottom: 30px;
`;

export const NewOffersComponent = ({ offers }) => {
  const columns = offers[0] && Object.keys(offers[0]);
  return (
    <SectionCenter>
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <th>Offer</th>
          <th>Created at</th>
        </thead>
        <tbody>
          {offers.map((row) => (
            <tr>
              <td>{row.offername}</td>
              <td>{row.createdat}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/" className="btn btn-new">
        back home
      </Link>
    </SectionCenter>
  );
};

import React from 'react';
import Navbar from './Navbar';
import Milestones from './Milestones';
import OffersInfo from './OffersInfo';
import styled from 'styled-components';

export const DashboardEl = styled.div`
  margin-left: 17rem;
  padding: 2rem;
  height: 100%;
  color: black;
  .grid {
    margin-top: 3rem;
    height: 100%;
    .one {
      margin: 2rem 0;
    }
    .two {
      height: 70%;
      grid-template-columns: 0.6fr 1fr;
      gap: 1rem;
    }
  }
`;

export default function Dashboard() {
  return (
    <DashboardEl>
      <Navbar />
      <div className="grid">
        <div className="one">
          <Milestones />
        </div>{' '}
        <div className="two">
          <OffersInfo />
        </div>{' '}
      </div>{' '}
    </DashboardEl>
  );
}

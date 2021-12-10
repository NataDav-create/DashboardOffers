import React from 'react';
import { ImNewTab } from 'react-icons/im';
import { MdWhatshot } from 'react-icons/md';
import { FcExpired } from 'react-icons/fc';
import styled from 'styled-components';

export const MilestonesEl = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  color: black;
  border: 2px solid #f5a1c5;
  padding: 1rem;
  border-radius: 1rem;
  .milestone {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    &:last-of-type {
      border-right: none;
    }
    padding-right: 4rem;
    .icon {
      padding: 1rem;
      font-size: 1.5rem;
      border-radius: 1rem;
      color: #f6d94b;
      background-color: #f5a1c5;
    }
    h2 {
      color: #f5a1c5;
    }
  }
`;

export default function Milestones() {
  const data = [
    {
      icon: ImNewTab,
      title: 'New Offers',
      value: '74k',
    },
    {
      icon: MdWhatshot,
      title: 'Hot Offers',
      value: '100k',
    },
    {
      icon: FcExpired,
      title: 'Expired Offers',
      value: '150k',
    },
  ];
  return (
    <MilestonesEl>
      {' '}
      {data.map((milestone) => {
        return (
          <div className="milestone">
            <div className="icon">
              <milestone.icon />
            </div>{' '}
            <div className="details">
              <h4> {milestone.title} </h4> <h2> {milestone.value} </h2>{' '}
            </div>{' '}
          </div>
        );
      })}{' '}
    </MilestonesEl>
  );
}

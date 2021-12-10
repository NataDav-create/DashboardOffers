import React from 'react';
import Title from './Title';
import styled from 'styled-components';

export const OffersInfoEl = styled.div`
  height: 100%;
  background-color: #fff;
  color: black;
  border: 2px solid #f5a1c5;
  border-radius: 1rem;
  padding: 1.4rem 2rem;
  .analytics {
    display: flex;
    align-items: center;
    gap: 1rem;
    .progress__bars {
      margin-top: 1rem;
      width: 100%;
      .progress__bar {
        margin-bottom: 1rem;
        width: 100%;
        .title-cont {
          display: flex;
          justify-content: space-between;
        }
        progress {
          width: 100%;
          height: 0.5rem;
          -webkit-appearance: none;
          &::-webkit-progress-bar {
            border-radius: 1rem;
            background-color: #333;
          }
          &::-webkit-progress-value {
            border-radius: 1rem;
            background-color: #f5a1c5;
          }
        }
      }
    }
  }
`;

export default function OffersInfo() {
  const data = [
    {
      title: 'New Offers',
      value: '70%',
    },
    {
      title: 'Hot Offers',
      value: '40%',
    },
    {
      title: 'Expired Offers',
      value: '60%',
    },
  ];
  return (
    <OffersInfoEl>
      <Title title="Offers Info" subtitle="Details about offers info" />
      <div className="analytics">
        <div className="progress__bars">
          {' '}
          {data.map((x) => {
            console.log('x', x);
            return (
              <div className="progress__bar">
                <div className="title-cont">
                  <h5> {x.title} </h5> <h5> {x.value} </h5>{' '}
                </div>{' '}
                <progress value={x.value} max="100" />
              </div>
            );
          })}{' '}
        </div>{' '}
      </div>{' '}
    </OffersInfoEl>
  );
}

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Chart from "react-google-charts";
import moment from 'moment';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export const SectionCenter = styled.div`
  padding: 5rem 0;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`;

export const Title = styled.h2`
  color: #000;
  font-size: 50px;
  margin-bottom: 30px;
`;

export const MilestonesEl = styled.div`
  display: flex;
  background-color: #fff;
  color: black;
  border: 2px solid #f5a1c5;
  padding: 1rem;
  border-radius: 1rem;
  .milestone {
    padding: 10px 50px;
    display: flex;
    justify-content: center;
    &:last-of-type {
      border-right: none;
    }
    h1 {
      color: #f5a1c5;
    }
  }
`;

const data = [
  {
    title: 'Unused Expired Offers',
    value: Math.floor(Math.random() * 190) + 'k',
  },
  {
    title: 'Expiring Offers',
    value: Math.floor(Math.random() * 190) + 'k',
  },

];

const formatForTable = (rawData) => (
  rawData.map(offer => [
    offer.offername,
    offer.networkname,
    moment(offer.expiringat).diff(moment(), 'hours') + " Hours",
    moment(offer.expiringat).format("MMM DD, YYYY HH:mm"),
  ])
)

const onSelectNetwork = (id) => console.log(id)


export function ExpiringOffersComponent() {
  const [expiredOffers, setExpiredOffers] = useState([]);
  const [networks, setNetworks] = useState([]);

  useEffect(() => {
    fetch("https://61b20da6c8d4640017aaf162.mockapi.io/api/offers")
      .then(res => res.json())
      .then(
        (result) => {
          setExpiredOffers(result);
        }
      )
  }, [])

  useEffect(() => {
    fetch("https://61b20da6c8d4640017aaf162.mockapi.io/api/network/")
      .then(res => res.json())
      .then(
        (result) =>
          setNetworks(result.map(function(_network) {
            var network = new Array();
            network['value'] = _network.id;
            network['label'] = _network.name;

            return network;
          })
        ))
  }, [])

  return (<SectionCenter>
    <MilestonesEl>
      {data.map((milestone) => {
        return (
          <div className="milestone">
            <div className="details">
              <h4>{milestone.title}</h4>
              <h1>{milestone.value}</h1>
            </div>
          </div>
        );
      })}
    </MilestonesEl>

    <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div>
          <Title>Expiring Offers</Title>
          <div>
            <h3 style={{'color': "#000"}}>Network</h3>
            <Dropdown
              options={networks}
              onChange={onSelectNetwork}
              placeholder="Select an option"/>
          </div>
          <Chart
            height={"200px"}
            chartType="Table"
            loader={<div>Loading Chart</div>}
            data={[
                    [
                      { type: 'string', label: 'Offer' },
                      { type: 'string', label: 'Network' },
                      { type: 'string', label: 'Hours to Expiring' },
                      { type: 'string', label: 'Expires at' },
                    ],
                    ...formatForTable(expiredOffers)
            ]}
            options={{
              title: 'Expiring Offers',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>
        <div>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Type", "Count"],
              ["Used", Math.floor(Math.random() * 100)],
              ["Unused", Math.floor(Math.random() * 20)],
            ]}
            options={{
              title: 'Expired Offers for the Month of ' + moment().format("MMMM"),
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>
    </div>
    <Link to="/" className="btn">
      back home
    </Link>
  </SectionCenter>)
}

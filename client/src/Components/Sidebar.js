import React from 'react';
import Links from './Links';
import styled from 'styled-components';

export const SidebarEl = styled.div`
  position: fixed;
  width: 15rem;
  height: 100%;
  background-color: #f5a1c5;
`;

export const Offers = styled.div`
  color: #010001;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const LinksEl = styled.div`
  ul {
    .active {
      border-right: 0.3rem solid #010001;
    }
  }
`;

export default function Sidebar() {
  const links = [
    { text: 'New Offers', icon: '', active: true },
    { text: 'Hot Offers', icon: '' },
    { text: 'Expired Offers', icon: '' },
  ];
  return (
    <SidebarEl>
      <Offers>Offers</Offers>
      <LinksEl>
        <Links links={links} />
      </LinksEl>
    </SidebarEl>
  );
}

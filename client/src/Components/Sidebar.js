import React from 'react';
import Links from './Links';
import styled from 'styled-components';
import { ImNewTab } from 'react-icons/im';
import { MdWhatshot } from 'react-icons/md';
import { FcExpired } from 'react-icons/fc';
import piggy from '../images/pi.png';

export const SidebarEl = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 17rem;
  height: 100%;
  background-color: #f5a1c5;
`;

export const Offers = styled.div`
  color: #fff;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const LinksEl = styled.div`
  ul {
    margin-bottom: 80px;
    .active {
      border-right: 0.3rem solid #010001;
      a {
        color: #010001;
      }
    }
    li {
      border-right: 0.3rem solid transparent;
      margin: 1rem 0;
      list-style-type: none;
      a {
        margin: 0 3rem;
        color: #010001;
        font-size: 1.1rem;
        display: flex;
        gap: 1rem;
      }
      transition: 0.3 ease-in-out;
      &:hover {
        border-right-color: #fff;
        a {
          color: #fff;
        }
      }
    }
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 9rem;
    object-fit: cover;
  }
`;

export default function Sidebar() {
  const links = [
    {
      text: 'New Offers',
      icon: ImNewTab,
      active: true,
      url: '/new',
    },
    {
      text: 'Hot Offers',
      icon: MdWhatshot,
      url: '/hot',
    },
    {
      text: 'Expired Offers',
      icon: FcExpired,
      url: '/expired',
    },
  ];
  return (
    <SidebarEl>
      <Offers> Offers </Offers>{' '}
      <LinksEl>
        <Links links={links} />{' '}
      </LinksEl>{' '}
      <ImgContainer>
        <img src={piggy} alt="piggy" />
      </ImgContainer>{' '}
    </SidebarEl>
  );
}

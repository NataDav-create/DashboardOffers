import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import styled from 'styled-components';

export const NavbarEl = styled.div`
  display: flex;
  justify-content: space-between;
  .title {
    color: #2d9e26;
    margin-bottom: 10px;
  }
  span {
    color: #2d9e26;
  }
  .container {
    display: flex;
    .search {
      background-color: #f5a1c5;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      padding: 0.5rem 1rem;
      color: #fff;
      gap: 1rem;
      font-size: 1.5rem;
      input {
        border: none;
        color: black;
        background-color: #fff;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;

export default function Navbar() {
  return (
    <NavbarEl>
      <div className="title">
        <h2> Dashboard </h2>{' '}
        <span> Detailed information about your offers </span>{' '}
      </div>{' '}
      <div className="container">
        <div className="search">
          <BiSearchAlt />
          <input type="text" placeholder="Search..." />
        </div>{' '}
      </div>{' '}
    </NavbarEl>
  );
}

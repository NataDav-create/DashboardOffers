import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

export default function Home() {
  return (
    <>
      <Sidebar />
      <Dashboard />
    </>
  );
}

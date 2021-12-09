import React from 'react';

export default function Sidebar() {
  const links = [
    { text: 'New Offers', icon: '', active: true },
    { text: 'Hot Offers', icon: '' },
    { text: 'Expired Offers', icon: '' },
  ];
  return (
    <div className="sidebar">
      <div className="offers">Offers</div>
      <div className="links"></div>
    </div>
  );
}

import React from 'react';

export default function Links({ links }) {
  return (
    <ul>
      {links.map((link) => {
        return <li className={link.active ? 'active' : ''}>{link.text}</li>;
      })}
    </ul>
  );
}

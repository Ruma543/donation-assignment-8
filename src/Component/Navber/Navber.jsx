import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
  const logo = 'https://i.imgur.com/2JRrdKy.png';
  return (
    <div className="flex justify-between items-center px-6">
      <div>
        <img src={logo} alt="" />
      </div>
      <nav className="flex justify-around gap-4">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? 'text-red-700 underline font-bold'
              : isPending
              ? 'pending'
              : ''
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isActive
              ? 'text-red-700 underline font-bold'
              : isPending
              ? 'pending'
              : ''
          }
        >
          Donation
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isActive
              ? 'text-red-700 underline font-bold'
              : isPending
              ? 'pending'
              : ''
          }
        >
          Statistics
        </NavLink>
      </nav>
    </div>
  );
};

export default Navber;
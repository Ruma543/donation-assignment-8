import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
  const logo = 'https://i.ibb.co/1JHSFtG/Logo.png';
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between md:flex-row md:justify-between items-center px-6 space-y-4">
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

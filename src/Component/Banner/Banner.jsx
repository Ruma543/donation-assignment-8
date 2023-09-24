import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Donations from '../Donations/Donations';

const Banner = () => {
  const allDonation = useLoaderData();
  const [searchInput, setSearchInput] = useState('');
  const [filteredDonation, setFilteredDonation] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  // console.log(allDonation);
  const handleSearchChange = event => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);

    const filtered = allDonation.filter(item =>
      item.category.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setFilteredDonation(filtered);
  };

  const handleSearchClick = () => {
    setSearchClicked(true);
  };
  return (
    <div className="h-[70vh]">
      <div
        className="hero h-full"
        style={{
          backgroundImage:
            'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className=" text-center text-neutral-content">
          <div className="w-4/5 mx-auto">
            <h1 className="mb-5 text-3xl font-bold">
              I Grow By Helping People In Need
            </h1>
            <div className="flex justify-center ">
              <input
                type="text"
                placeholder="Search "
                value={searchInput}
                onChange={handleSearchChange}
                className="border border-red-300 rounded-lg p-2 w-full"
              />
              <button onClick={handleSearchClick} className="btn btn-success">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <Donations
        allDonation={allDonation}
        filteredDonation={filteredDonation}
        searchClicked={searchClicked}
      ></Donations>
    </div>
  );
};

export default Banner;

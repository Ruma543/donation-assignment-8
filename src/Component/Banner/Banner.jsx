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
    <div className="h-[70vh] my-5">
      <div
        className="hero h-full"
        style={{
          backgroundImage: 'url(https://i.ibb.co/sQYScxG/Rectangle-4281.png)',
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-90"></div>
        <div className=" text-center w-full text-neutral-content">
          <div className="w-4/5 mx-auto">
            <h1 className="mb-5 text-3xl font-bold text-black ">
              I Grow By Helping People In Need
            </h1>
            <div className="flex justify-center ">
              <input
                type="text"
                placeholder="Search "
                value={searchInput}
                onChange={handleSearchChange}
                className="shadow-lg  border-2 border-gray-100 rounded-lg p-2 w-full block rounded-r-none"
              />
              <button
                onClick={handleSearchClick}
                className="btn btn-error rounded-l-none"
              >
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

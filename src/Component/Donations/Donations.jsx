import React from 'react';
import DonationsCard from './DonationsCard';

const Donations = ({ allDonation, filteredDonation, searchClicked }) => {
  // console.log(allDonation);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-5">
      {searchClicked
        ? filteredDonation?.map(donation => (
            <DonationsCard
              key={donation.id}
              donation={donation}
            ></DonationsCard>
          ))
        : allDonation?.map(donation => (
            <DonationsCard
              key={donation.id}
              donation={donation}
            ></DonationsCard>
          ))}
    </div>
  );
};

export default Donations;

import React from 'react';
import DonationsCard from './DonationsCard';

const Donations = ({ allDonation, filteredDonation, searchClicked }) => {
  // console.log(allDonation);
  return (
    <div className="grid grid-cols-4 gap-4">
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

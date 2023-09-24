import React, { useEffect, useState } from 'react';
import DonationCard from './DonationCard';

const Donation = () => {
  const [allDonation, setAllDonation] = useState();
  const [noFound, setNoFound] = useState(false);
  useEffect(() => {
    const donateItem = JSON.parse(localStorage.getItem('donation'));
    if (donateItem) {
      setAllDonation(donateItem);
    } else {
      setNoFound('no data');
    }
  }, []);
  return (
    <div>
      {noFound ? (
        <p>{noFound}</p>
      ) : (
        <div>
          {allDonation.map(donation => (
            <DonationCard key={donation.id} donation={donation}></DonationCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donation;

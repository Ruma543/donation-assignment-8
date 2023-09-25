import React, { useEffect, useState } from 'react';
import DonationCard from './DonationCard';
import DonationDetailsCard from '../DonationDetails/DonationDetailsCard';

const Donation = () => {
  const [allDonation, setAllDonation] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShowAll, setIsShowAll] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);
  useEffect(() => {
    const donateItem = JSON.parse(localStorage.getItem('donation'));
    if (donateItem) {
      setAllDonation(donateItem);
    } else {
      setNoFound('no data');
    }
  }, []);
  const handleViewDetails = donation => {
    setSelectedDonation(donation);
  };
  return (
    <div className="my-7">
      {noFound ? (
        <p>{noFound}</p>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-4">
            {isShowAll
              ? allDonation.map(donation => (
                  <DonationCard
                    key={donation.id}
                    donation={donation}
                    handleViewDetails={handleViewDetails}
                  ></DonationCard>
                ))
              : allDonation
                  .slice(0, 4)
                  .map(donation => (
                    <DonationCard
                      key={donation.id}
                      donation={donation}
                      handleViewDetails={handleViewDetails}
                    ></DonationCard>
                  ))}
          </div>
          {allDonation.length > 4 && (
            <button
              className="px-3 py-2 rounded-lg text-white bg-green-600 my-5"
              onClick={() => setIsShowAll(!isShowAll)}
            >
              {isShowAll ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      )}
      {selectedDonation && (
        <DonationDetailsCard donation={selectedDonation}></DonationDetailsCard>
      )}
    </div>
  );
};

export default Donation;

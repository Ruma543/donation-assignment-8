import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DonationDetailsCard from './DonationDetailsCard';

const DonationDetails = () => {
  const donations = useLoaderData();
  // console.log(donations);
  const [donation, setDonation] = useState();
  const { id } = useParams();
  useEffect(() => {
    const findDonation =
      donations && donations?.find(donation => donation.id === id);
    setDonation(findDonation);
    // console.log(findDonation);
  }, [id, donations]);

  return (
    <div>
      <DonationDetailsCard donation={donation}></DonationDetailsCard>
    </div>
  );
};

export default DonationDetails;

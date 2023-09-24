import React from 'react';

const DonationDetailsCard = ({ donation }) => {
  console.log(donation);
  const {
    image,
    category,
    title,
    id,
    text_color,
    card_background_color,
    category_background_color,
    description,
    donation_amount,
  } = donation || {};
  const handleAddDonate = () => {
    const donateItemAdded = [];
    const donateItem = JSON.parse(localStorage.getItem('donation'));
    if (!donateItem) {
      donateItemAdded.push(donation);
      localStorage.setItem('donation', JSON.stringify(donateItemAdded));
      return alert('added');
    } else {
      const isExist = donateItem.find(item => item.id === id);
      if (!isExist) {
        donateItemAdded.push(...donateItem, donation);
        localStorage.setItem('donation', JSON.stringify(donateItemAdded));
        return alert('added');
      } else {
        return alert('already exist');
      }
    }
  };
  return (
    <div className="w-4/5 mx-auto my-6 space-y-4">
      <div className="relative">
        <img className="w-full h-[70vh] rounded-lg" src={image} alt="" />
        <div className="absolute bottom-8 left-8 w-full mx-auto py-6 bg-black opacity-50">
          <button onClick={handleAddDonate} className="btn btn-primary left-3">
            Donate $ {donation_amount}
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-semibold text-left">{title}</h2>
      <h3 className="text-xl text-left">{description}</h3>
    </div>
  );
};

export default DonationDetailsCard;

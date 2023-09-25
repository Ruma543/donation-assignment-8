import React from 'react';
import swal from 'sweetalert';

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
  const btnBgStyle = {
    backgroundColor: text_color,
  };

  const handleAddDonate = () => {
    const donateItemAdded = [];
    const donateItem = JSON.parse(localStorage.getItem('donation'));
    if (!donateItem) {
      donateItemAdded.push(donation);
      localStorage.setItem('donation', JSON.stringify(donateItemAdded));
      swal('Good job!', 'Donation Added!', 'success');
    } else {
      const isExist = donateItem.find(item => item.id === id);
      if (!isExist) {
        donateItemAdded.push(...donateItem, donation);
        localStorage.setItem('donation', JSON.stringify(donateItemAdded));
        swal('Good job!', 'Donation Added!', 'success');
      } else {
        swal('Oh no!', 'You Already Donate this Category !', 'error');
      }
    }
  };
  return (
    <div className="w-4/5 mx-auto my-6 space-y-4">
      <div className="relative">
        <img className="w-full h-[70vh] rounded-lg" src={image} alt="" />
        <div className="absolute bottom-0 left-0 w-full mx-auto py-6 bg-black opacity-50  flex">
          <div>
            <button
              onClick={handleAddDonate}
              className=" flex-start ml-5 py-2 px-3 rounded-lg text-white "
              style={btnBgStyle}
            >
              Donate $ {donation_amount}
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-semibold text-left">{title}</h2>
      <h3 className="text-xl text-left">{description}</h3>
    </div>
  );
};

export default DonationDetailsCard;

import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
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
  const cStyle = {
    backgroundColor: card_background_color.color,
  };
  const categoryBgStyle = {
    backgroundColor: category_background_color.color,
  };

  const tStyle = {
    color: text_color,
  };
  const bBgStyle = {
    backgroundColor: text_color,
  };
  // console.log(donation);
  return (
    <div className="flex justify-around rounded-lg gap-5" style={cStyle}>
      <div className="w-2/5">
        <img src={image} alt="" />
      </div>
      <div className="w-3/5 flex flex-col px-5 py-5 text-left">
        <h3
          className="px-2 py-1 rounded-lg w-2/5  font-bold"
          style={{ ...categoryBgStyle, ...tStyle }}
        >
          {category}
        </h3>
        <h3 className="text-xl font-semibold">{title}</h3>
        <h3 style={tStyle}>${donation_amount}</h3>
        <Link to={`/donations/${id}`}>
          <button
            className="px-3 py-2 rounded-lg text-white font-semibold"
            style={bBgStyle}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;

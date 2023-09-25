import React from 'react';
import { Link } from 'react-router-dom';

const DonationsCard = ({ donation }) => {
  // console.log(donation);
  const {
    image,
    category,
    title,
    id,
    text_color,
    card_background_color,
    category_background_color,
  } = donation || {};
  const cardStyle = {
    backgroundColor: card_background_color.color,
  };
  const CategoryBgStyle = {
    backgroundColor: category_background_color.color,
  };

  const titleStyle = {
    color: text_color,
  };
  return (
    <div>
      <Link to={`donations/${id}`}>
        <div>
          <div className="">
            <img className="w-full" src={image} alt="" />
          </div>
          <div className="card-body  text-left rounded-b-lg" style={cardStyle}>
            <h3
              className="px-3 py-2 text-left w-2/4 rounded-lg text-lg font-semibold "
              style={{ ...CategoryBgStyle, ...titleStyle }}
            >
              {category}
            </h3>
            <h2
              className="card-title  text-xl font-bold h-10 "
              style={titleStyle}
            >
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationsCard;

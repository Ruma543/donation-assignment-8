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
  return (
    <div>
      <Link to={`donations/${id}`}>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="" />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-end">
              <h3 className="">{category}</h3>
            </div>
            <h2 className="card-title">{title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationsCard;

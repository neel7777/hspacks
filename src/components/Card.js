import React from 'react';

const Card = ({ name, image }) => {
  return (
    <div className="card-content">
      <img className="small-image" src={image} alt={name} />
    </div>
  );
};

export default Card;

import React from 'react';
import Services from './Services';

const ServiceCard = ({service}) => {
    const {image, price, title, description} = Services;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-2xl text-orange-600 font-semibold'>Price:${price}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;
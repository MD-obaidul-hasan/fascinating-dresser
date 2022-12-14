import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const  { _id, picture, price, title, description} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-2xl text-orange-600 font-semibold'>Price:${price}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/viewdetals/${_id}`}><button className="btn btn-primary">View details</button></Link>
      
    </div>
  </div>
</div>
    );
};

export default ServiceCard;
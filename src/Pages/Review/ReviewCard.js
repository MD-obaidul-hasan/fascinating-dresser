import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = ({review}) => {
    const { _id, picture, price, title, description} = review;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-2xl text-orange-600 font-semibold'>Price:${price}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/review/${_id}`}><button className="btn btn-primary">Checkout</button></Link>
      
    </div>
  </div>
</div>
    );
};

export default ReviewCard;
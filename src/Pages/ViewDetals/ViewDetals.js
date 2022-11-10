import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ViewDetals = () => {
    const { _id,picture,title, price, description} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregisterd';
        const phone = form.phone.value;
        // const review = form.review.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            // review
        }

        // if(phone.length > 10){
        //     alert('phone number should be 10 charecter or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res =>res.json() )
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('order placed successfully' )
                form.reset();
            }
        })
        .catch(er => console.error(er));
    }
    return (
        <div>
            <div className="card my-10 w-3/4 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <h3>{price}</h3>
                    <p>{description}</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <form onSubmit={handlePlaceOrder} >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="first name" className="input input-ghost w-full input-bordered " />
                    <input name="lastName" type="text" placeholder="last name" className="input input-ghost w-full input-bordered " />
                    <input name="phone" type="text" placeholder="phone" className="input input-ghost w-full input-bordered " required />
                    <input name="email" type="text" placeholder="your email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                </div>
                {/* <textarea name="review " className="textarea textarea-bordered h-24 w-full gap-4" placeholder="Your Review" required></textarea> */}
                <input  className='btn' type="submit" value="place your order"></input>
            </form>
            
        </div>
    );
};

export default ViewDetals;
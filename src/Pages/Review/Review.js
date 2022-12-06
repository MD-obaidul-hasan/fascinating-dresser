// import { data } from 'autoprefixer';
// import React, { useContext } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthProvider/AuthProvider';

// const Review = () => {
//     const {_id,title,price} = useLoaderData();
//     const {user} = useContext(AuthContext);

//     const handlePlaceOrder = event =>{
//         event.preventDefault();
//         const form =event.target;
//         const name =`${form.firstName.value} ${form.lastName.value}`;
//         const email = user?.email || 'unregistered';
//         const phone = form.phone.value;
//         const message = form.message.value;

//         const order ={
//             service:_id,
//             serviceName: title,
//              price,
//             customer: name,
//             email,
//             phone,
//             message       
//          }
//         //  if (phone.length > 10){
//         //     alert('Phone number should be 10 charecter or longer')
//         //  }
//         //  else{

//         //  }

//         //  fetch('https://fascinating-dresser-server-md-obaidul-hasan.vercel.app/reviews', {
//         //     method: 'POST',
//         //     headers:{
//         //         'content-type': 'application/json'
//         //     },
//         //     body: JSON.stringify(order)
//         //  })
//         fetch(`https://fascinating-dresser-server-md-obaidul-hasan.vercel.app/reviews?
//         id=${data.service_id}`)
//          .then(res => res.json())
//          .then(data => {
//             console.log(data)
//             if(data.acknowledged){
//                 alert('Order place successfully')
//                 form.reset();
//             }

//         })
//          .catch(er => console.error(er));
        
//      }
//     return (
//         <div></div>
//         // <div>
            
//         //      <form onSubmit={handlePlaceOrder}>
//         //         <h2 className='text-4xl'>You are about to order:{title}</h2>
//         //         <h4 className='text-3xl'>Price:{price}</h4>

//         //         <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
//         //             <input name='firstName' type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered " />
//         //             <input name='lastName' type="text" placeholder="Last Name" className="input input-ghost w-full input-bordered" />
//         //              <input name='Phone' type="text" placeholder="Your Phone" className="input input-ghost w-full input-bordered "required />
//         //             <input name='Email' type="text" placeholder="Your Email" defaultValue={user?.email}  className="input input-ghost w-full input-bordered" readOnly/>
//         //         </div>
                
//         //         <textarea name='massage' className="textarea textarea-bordered h-24 w-full" placeholder="Your review" required></textarea>
//         //         <input className='btn' type='submit' value='place your order'></input>
//         //     </form> 
            
//         // </div>
//     );
// };

// export default Review;

import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';


const Review = () => {
    const [review, setReview] =useState([]);

    useEffect(() =>{
        fetch('https://fascinating-dresser-server-md-obaidul-hasan.vercel.app/review')
        .then(res => res.json())
        .then(data => setReview(data))
    }, []);
    return (
        <div>
            <div className='text-center mb-4'>
                <p className='text-2xl font-bold text-orange-600'> Services</p>
                <h2 className='text-5xl font-semibold'> My Service Area</h2>
                <p className='my-5'>Event decoration servisis is avalable  in capital city in our country.<br/>
                Outsite capital need booking first and need extra qurier service charge.<br/>
                so need contract with me.</p>
            </div>
            <div className='grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {/* <h2>services:{services.length}</h2> */}
                {

                    // review.map(review => <ReviewCard
                    //     key={review._id}
                    //     review={review}
                    // ></reviewCard>)

                    review.map(review => <ReviewCard>
                        key={review._id}
                        review={review}
                    </ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;
import React from 'react';
import design from '../../../Image/about/SIGARAM-1965.jpg'

const Contract = () => {
    return (
        <div>
        <div className='text-center mb-4'>
        <p className='text-2xl font-bold text-orange-600'> Contract</p>
        <h2 className='text-5xl font-semibold'> My Adreess</h2>
        <p className='my-5'>Contract with me, if you wan to book for appoitment.</p>
    </div>
       
        <div className=" mr-25flex justify-center card w-4/4 bg-base-100 shadow-xl image-full">
             
        <figure><img src=
        {design} alt="Desser" /></figure>
        <div className="card-body">
          <h2 className="card-title text-center">Contract with Me</h2>
          <p className='text-center'>Name:Md.Obaidul Hasan <br/>
             Email:md.obaidulhasanlimu@gmail.com<br/>
             cell no:017..........<br/>
             Address:H-32/2, Road:6-b<br/>
                     Dhanmondi,dhaka.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Contract Now</button>
          </div>
        </div>
      </div>
      </div>
        
    );
};

export default Contract;
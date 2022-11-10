import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OderviewRow from './OderviewRow';

const Oderview = () => {
    const {user} = useContext(AuthContext);
    const [oderview, setOderview] = useState({})

    useEffect(() =>{
        fetch(`https://fascinating-dresser-server.vercel.app/orders?email=${user}`)
        .then(res => res.json())
        .then(data =>setOderview(data))
    }, [user?.email])
    return (
        <div>
            <h2 className='text-5xl'>You Review {oderview.length} Orders</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    {/* <tbody>
     
      {
        oderview.map(orders => <OderviewRow
        key={orders._id}
        order = {orders}
        ></OderviewRow> )
      }
   </tbody> */}

    </table>
</div>
        </div>
    );
};

export default Oderview;
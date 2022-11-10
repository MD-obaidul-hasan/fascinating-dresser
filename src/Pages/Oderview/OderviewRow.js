import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const OderviewRow = ({order}) => {
    const {serviceName,phone, customer, price, service} = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() =>{
        fetch(`https://fascinating-dresser-server.vercel.app/services/${service}`)
        .then(res => res.json())
        .then(data => setOrderService(data));
    }, [service])
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
                {
                    orderService?.picture &&
                     <img src={orderService.picture} alt="Avatar Tailwind CSS Component" />
                }
               
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">${price}</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default OderviewRow;
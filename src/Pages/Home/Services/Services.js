import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() =>{
        fetch('https://fascinating-dresser-server.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
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
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <Link to={`/services`}> <button className="justify-center btn btn-gray-600">see more</button></Link>
            
        </div>
    );
};

export default Services;
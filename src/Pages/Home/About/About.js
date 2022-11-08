import React from 'react';
import person from '../../../Image/about/SAM_1066.JPG'
import parts from '../../../Image/about/Sakthi-Wedding-004-1024x512.jpg'

const About = () => {
    return (
        <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row">
    <div className=' relative w-1/2' >
    <img src={person} alt='' className=" w-2/5 h-3/4 border-8 rounded-lg shadow-2xl" />
    <img src={parts} alt='' className=" w-3/5 right-5 border-8 top-1/2 absolute rounded-lg shadow-2xl" />
    </div>
    
    <div className='w-1/2'>
        <p className='  text-2xl font-bold text-orange-600'>About Myself</p>

      <h1 className=" my-5 text-5xl font-bold">I am quilified <br/>
      & of exprience <br/> in this field</h1>
      <p className="py-6">Event decoration need to mange this event arrage good looking. i am a expert for decoration any typr of event decorate.</p>
      <button className="btn btn-primary">Get More info</button>
    </div>
  </div>
</div>
    );
};

export default About;
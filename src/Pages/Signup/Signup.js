import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const handleSignup = event =>{
        event.preventDefault();
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content  flex-col lg:flex-row">
    
    <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
    <h1 className="text-5xl font-bold">Sign Up</h1>
      <form onSubmit={handleSignup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
            <input  className="btn btn-primary" type='submit' value="Sign Up"/>
          {/* <button type='submit' className="btn btn-primary">Login</button> */}
        </div>
      </form>

      <p className='text-center'>Already have an account <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
    </div>
  </div>
</div>
    );
};

export default Signup;
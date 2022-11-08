import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content  flex-col lg:flex-row">
    
    <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
    <h1 className="text-5xl font-bold">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input  className="btn btn-primary" type='submit' value="login"/>
          {/* <button type='submit' className="btn btn-primary">Login</button> */}
        </div>
      </form>

      <p className='text-center'>New to fascinating dresser <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
    </div>
  </div>
</div>
    );
};

export default Login;
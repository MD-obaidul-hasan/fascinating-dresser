import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import logo from '../../../Image/fdelogos.PNG'
// import { img } from "../../../Image/fdelogos.PNG";

const Header = () => {
  const {user} = useContext(AuthContext);

    const menuItems = <>
    <li className='font-semibold'><Link to='/'>Home</Link></li>
    {
      user?.email ?
      <>
       <li className='font-semibold'><Link to='/orders'>Orders</Link></li>
      </>
      :
      <li className='font-semibold'><Link to='/login'>Login</Link></li>
    }
    
    <li className='font-semibold'><Link to='/service'>Service</Link></li>
    <li className='font-semibold'><Link to='/Blog'>Blog</Link></li>
    </>
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              
              {menuItems}
              {/* <li><a>Item 1</a></li> */}
              {/* <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li> */}
              {/* <li><a>Item 3</a></li> */}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo}></img></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
            {/* <li><a>Item 1</a></li> */}
            {/* <li tabIndex={0}>
              <a>
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li> */}
            {/* <li><a>Item 3</a></li> */}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Appoinment</button>
          {/* <a className="btn">Get started</a> */}
        </div>
      </div>
    );
};

export default Header;
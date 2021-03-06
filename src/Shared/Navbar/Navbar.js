import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
         <li><Link to='/todo'>Todo</Link></li>
        <li> {user ? <button className='py-4 px-2 ' onClick={handleSignOut} >Sign Out</button> : <Link to='/login'>Login</Link>} </li>
    </>
    return (
        <div className='bg-white shadow-lg '>
            <div className="navbar  max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact  dropdown-content shadow bg-base-100 rounded-box w-52 ">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="text-xl whitespace-nowrap">Todo App</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal whitespace-nowrap">
                    {menuItems}
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navbar;
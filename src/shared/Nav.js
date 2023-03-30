import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);

    const userLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }
    return (
        <section className='sticky top-0 z-30 font-semibold'>
            <div className="navbar  bg-[#1a4e7b] text-white">
                <div className="navbar-start">
                    <div className="dropdown text-black">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/hotels'}>Hotels</Link></li>
                            <li><Link to={'/services'}>Services</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                            <li><a href={'/contact'}>Contact</a></li>
                            {
                                user && <>
                                    <li><Link to={'/myreviews'}>My Reviews</Link>
                                    </li>
                                    <li><Link to={'/addservice'}>Add Service</Link></li></>
                            }
                        </ul>
                    </div>
                    <p className="btn btn-ghost normal-case text-xl">Crazy Travel</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/hotels'}>Hotels</Link></li>
                        <li><Link to={'/services'}>Services</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                        {
                            user && <>
                                <li><Link to={'/myreviews'}>My Reviews</Link>
                                </li>
                                <li><Link to={'/addservice'}>Add Service</Link></li></>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <Link data-tip={user.displayName} className="tooltip tooltip-bottom"><img className='h-10 w-10 rounded-full' src={user?.photoURL} alt="" /></Link>
                            <button onClick={userLogOut} className='bg-cyan-600 py-2 px-4 rounded mr-2 hover:bg-rose-600 duration-300'>LogOut</button></>
                            :
                            <Link to={'/login'} className='bg-cyan-600 py-2 px-4 rounded mr-2 hover:bg-cyan-400 duration-300' >Login</Link>
                    }
                </div>
            </div>
        </section>
    );
};

export default Nav;
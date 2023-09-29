import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProviders';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    return (
        <>
            <div className="navbar bg-stone-600">
                <div className="navbar-start ml-10">
                    <img className='w-20' src={'/assets/image/logo.jpg'}></img>
                    <p className="ml-4 normal-case hidden lg:block lg:text-xl text-stone-400">Lé Lugano <br /> Cucine Italiana</p>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1 text-stone-400">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li>
                            <NavLink to='/blogs'>
                                Blogs
                            </NavLink>

                        </li>

                    </ul>
                </div>
                <div className="navbar-end mr-10">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-left" data-tip={user?.displayName || user?.email}>
                                    <div className="w-16 rounded-full " >
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile Settings
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><button onClick={logOut}>Logout</button></li>
                                </ul>
                            </div>
                            :
                            <Link to='/login' className='btn bg-stone-700 text-stone-400'>Login</Link>
                    }

                </div>
            </div>
        </>
    );
};

export default Navbar;
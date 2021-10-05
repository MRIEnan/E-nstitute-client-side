import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const handleclick = () => {
        console.log('cliked');
        const navigateBox = document.getElementById('navigate-btn');
        navigateBox.removeAttribute('className')
        navigateBox.setAttribute('className','text-center gap-2 transition-all 2s hidden');
        document.getElementById('same-btn').style.transform= 'all rotate(360deg)';

    }
    return (
        <>
        <div className="flex bg-my-dark-one justify-between">
            <NavLink to="./home">
                <h2 className="text-white md:text-xl sm:text-2xl font-semibold ml-5 mt-1">E-nstitue</h2>
            </NavLink>
            <ul className="hidden md:flex justify-end bg-my-dark-one text-white  h-10 md:mr-5 sm:mr-2">
                <li className="px-2 my-auto hover:bg-my-light-white hover:text-gray-700 transition-all 2s">
                    <NavLink to="/home">HOME</NavLink>
                </li>
                <li className="px-2 my-auto hover:bg-my-light-white hover:text-gray-700 transition-all 2s">
                    <NavLink to="/courses">COURSES</NavLink>
                </li>
                <li className="px-2 my-auto hover:bg-my-light-white hover:text-gray-700 transition-all 2s">
                    <NavLink to="/admission">ADMISSION</NavLink>
                </li>
                <li className="px-2 my-auto hover:bg-my-light-white hover:text-gray-700 transition-all 2s">
                    <NavLink to="/About">ABOUT US</NavLink>
                </li>
            </ul>
            <p id='same-btn' className="mx-2 my-auto cursor-default md:hidden sm:block" onClick={handleclick}>🧲</p>
        </div>
        <div>
            <ul id="navigate-btn" className="sm:grid md:hidden text-center gap-2 transition-all 2s">
                <li>
                    <NavLink to="/home">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/courses">COURSES</NavLink>
                </li>
                <li>
                    <NavLink to="/admission">ADMISSION</NavLink>
                </li>
                <li>
                    <NavLink to="/about">ABOUT</NavLink>
                </li>
            </ul>
        </div>
        </>
    );
};

export default Navigation;
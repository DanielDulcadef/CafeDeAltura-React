import React from 'react'
import { Button } from './Button';
import { NavLinks } from './NavLinks';
import Vector from '../Images/Vector.svg'
import Phone from '../Images/Phone.svg'
import Group from '../Images/Group.svg'

export const NavBar = () => {
    return (
        <nav className="bg-black flex text-white justify-around text-center items-center content-center h-16 w-screen">
            <div className="flex justify-start items-center gap-3">
                <div className="text-2xl"> cafedealtura.com </div>
                <img src={Vector} alt="cane" />
            </div>
            <NavLinks />
            <div className="flex items-center gap-5  ">
                <div className=""> <img src={Phone} alt="phone" /> </div>
                <div><a href="tel:+34919490518">+34 919 49 05 18</a></div>
                <Button />
                <div><img src={Group} alt="" /></div>
            </div>
        </nav>)
}

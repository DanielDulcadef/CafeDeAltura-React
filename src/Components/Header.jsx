import React from 'react'
import CoffePlant from '../Images/Hero image.png'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="flex items-center justify-start text-left py-12 px-10 gap-6 ">
            <div className="flex items-start flex-col justify-center  gap-4">
                <h3 className="text-green text-[18px] text-green"><strong> De la planta a tu taza </strong></h3>
                <h1 className="text-[40px] leading-[44px]  font-semibold "> El mejor cafe del mundo, ahora en tu casa. </h1>
                <p className="text-[12px] font-normal leading-4">trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de cafe y que puedas
                    viajar desde la comodidad de tu hogar</p>
                <div className="flex gap-4">
                    <Link className="text-white bg-black py-3 px-6 rounded-md" to={'/Sobre_Nosotros'} >Descrubir orígenes</Link>
                    <Link className="text-white bg-strong-green py-3 px-6 rounded-md" to={'/Contacto'} >Comprar café</Link>
                </div>
            </div>
            <div >
                <div >
                    <img className=" rounded-[20px] " src={CoffePlant} alt='CoffePlant' />
                </div>
            </div>
        </div>
    )

}

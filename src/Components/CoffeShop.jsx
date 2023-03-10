import React from 'react'
import restaurante from '../Images/coffee_shop.jpg'
import { Link } from 'react-router-dom'
import arrowRight from '../Images/flecha_negra.svg'

export const CoffeShop = () => {
  return (
    <div className="  py-[45px] px-[40px]">
            <div className="flex gap-6 items-center">
                <div className="flex flex-col text-start gap-4  w-[588px]">
                    <h2 className='text-green text-[24px] font-medium'>Pruebálo en nuestro coffe shop</h2>
                    <p className='text-[13px] font-normal leading-4'> Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu
                        pedido y llévate un descuento</p>

                    <Link className='text-[14px] font-semibold
                        underline flex flex-row gap-2 items-center
                        ' to={'pages/Sobre_nosotros.htm'} >Cómo llegar <img className='h-[8px]' src={arrowRight} alt="arrowRight" /></Link>
                </div>
                <div>
                    <img className="rounded-[20px] w-[588px]" src={restaurante} alt='restaurante' />
                </div>
            </div>
        </div>
  )
}

import React from 'react'
import Gift from '../Images/gift_icon.png';
import Truck from '../Images/truck_icon.png';
import Clipboard from '../Images/list_icon.png';

export const Condiciones = () => {
    return (
        <div className="h-[380px] flex flex-col justify-center
            bg-CoffeLait bg-center bg-cover text-center"
        >
            <h2 className='text-white text-[24px]'>Café con las mejores condiciones</h2>
            <div className="flex  gap-6 justify-center mt-[24px]">
                <div className="bg-white flex flex-col justify-center items-center
                w-[316px] rounded-lg
           gap-4 py-6">
                    <img className='bg-green  rounded-[20px] p-3' src={Clipboard} alt='Clipboard' />
                    <h3 className='font-semibold text-lg leading-6'>Recibe tu pedido sin preocuparte</h3>
                    <p className='text-[14px] leading-4  font-normal h-[64px] px-[19.5px]'>
                        Tienes cosas mas importante en la cabeza, por eso con nuestra
                        suscripcion de cafe, nunca tu quedaras sin tu taza de la mañana.
                    </p>
                </div>
                <div className="bg-white flex flex-col justify-center items-center
                 w-[316px] rounded-lg pb-[20px]
                 gap-4 ">
                    <img className='bg-green  rounded-[20px] p-3' src={Truck} alt='Truck' />
                    <h3 className='font-semibold text-lg leading-6'> en 24/48h</h3>
                    <p className="text-[14px] font-normal leading-4  px-4">Pide tu café antes de las 12h y lo recibiras al dia siguiente</p>
                </div>
                <div className="bg-white flex flex-col justify-center items-center
                 w-[316px] rounded-lg
                 gap-4">
                    <img className='bg-green  rounded-[20px] p-3' src={Gift} alt='Gift' />
                    <h3 className='font-semibold text-lg leading-6'>Descuentos y beneficios</h3>
                    <p className="text-[14px] leading-4  font-normal w-[268px] h-[64px]">Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que
                        lo descubras a
                        nosotros
                    </p>
                </div>
            </div>
        </div>
    )
}

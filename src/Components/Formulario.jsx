import React from 'react'
import telefonogris from '../Images/telefono_gris.svg'
import iconocorreo from '../Images/Icon.svg'

export const Formulario = () => {
    return (
        <section className='flex justify-center items-center bg-brown w-full  '>
            <div className='flex flex-col justify-center items-start gap-12 w-6/12 bg-brown m-9 '>
                <div className='titleform'>
                    <h3>Entra en contacto con nosotros</h3>
                    <p className="text-grey-form pt-3">Si tienes dudas, ponte en contacto con nosotros a través del formulario y te
                        responderemos lo
                        antes posible.</p>
                </div>

                <div className='flex-col'>
                    <p className="text-grey-form font-normal text-sm pb-10 ">También puedes ponerte en contacto con nostros en nuestra dirección o a
                        través del teléfono de la  tienda.
                    </p>
                    <div className="street">
                        <p className="text-grey-form font-normal text-sm">742 Evergreen Terrace</p>
                        <p className="text-grey-form font-normal text-sm">Springfield, OR 12345</p>
                    </div>
                    <div className="flex flex-col justify-center items-start text-grey-form gap-3 py-4 ">
                        <div className="flex gap-3"><img src={telefonogris} alt="tel" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex gap-3"><img src={iconocorreo} alt="" />
                            <span>support@example.com</span>
                        </div>
                    </div>
                    <p className="text-grey-form">¿Buscas un trabajo? <a className="text-black" href="">Ver nuestras ofertas.</a></p>
                </div>
            </div>
            <div className="flex flex-col w-6/12 bg-white pt-[75px] pl-[19px] pb-[75px] mr-4  ">
                <div className='flex flex-col gap-3'>
                    <div>
                        <label>Nombre completo</label>
                        <input type="text" style={{ width: "95%" }} name="name" className="rounded border border-slate-600 h-8" />
                    </div>

                    <div>
                        <label >Email</label>
                        <input type="email" style={{ width: "95%" }} name="email" className="rounded border border-slate-600 h-8" />
                    </div>

                    <div>
                        <label>Teléfono</label>
                        <input type="tel" list="listatelefonos" style={{ width: "95%" }} className="rounded border border-slate-600 h-8" min="3"
                            max="9" name="phone" />

                    </div>

                </div>
                <div>
                    <textarea name="message" className="rounded border my-5  " style={{ width: "95%" }} id="message" cols="65" rows="8"
                        placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>
                <div>
                    <input type="checkbox" name="privacidad" id="privacidad" />
                    <label >Acepto la <a href="" className="text-black ">Pólitica de Privacidad</a> y los <a
                        className="text-black" href="">Términos y condiciones</a>.</label>
                </div>
                <br></br>
                <div>
                    <button className=" p-3 bg-strong-green text-white border-none rounded font-semibold text-sm cursor-pointer w-20">Enviar</button>
                </div>
                <datalist id="listatelefonos">
                    <option value="US +1(555) 987-6543" />
                </datalist>
            </div>


        </section>
    )
}


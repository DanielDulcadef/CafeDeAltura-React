
import { useState } from "react";
import Chevron from '../Images/flecha_abajo.png'
import divider from '../Images/Divider.png'

const Flechas = ({ tittle, text, id }) => {
    const [toggle, setToggle] = useState(false);



    return (
        <div className="bg-white flex flex-col w-[668px] p-[22px] rounded-[10px] " key={id}>
            <div className=" flex flex-row justify-between text-[18px] font-semibold
                  
            ">
                {tittle}
                <img src={Chevron} alt='Chevron'
                    className={toggle ? "rotate-0" : "rotate-180"}
                    onClick={() => setToggle(!toggle)}
                /></div>

            {toggle ?
                <div className=" translate-y-1 text-[12px] text-start ">
                    <img className="py-4" src={divider} alt="" />
                    {text}</div> :
                <div></div>}
        </div>

    );
};
export default Flechas
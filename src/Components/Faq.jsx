
import Flechas from "./Flechas";
import Arrow from "../Images/flecha_blanca.png";
import { Link } from "react-router-dom";

export default function Faq() {
    const data = [{
        tittle: "¿Cómo hago el pedido?",
        text: "Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.",
    }, {
        tittle: "¿Por qué los precios son tan bajos?",
        text: "Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible",
    }, {
        tittle: "¿Es posible enviar café a mi oficina? ",
        text: "El café que deseas prboar y completa el proceso de compra. si lo prefieres, te preguntaremos   cada cuánto quieres que te lo mandemos a casa y así nunca te quedaras sin café"
    }];

    return (
        <div className="bg-green h-[621px] flex flex-col justify-center  items-center gap-4">
            <h2 className="text-[24px] font-normal text-white mb-4">Preguntas frecuentes</h2>
            {data.map((d, id) => {
                return <Flechas key={id} id={id} tittle={d.tittle} text={d.text} />;
            })}

            <Link to="/sobre_nosotros" > <p className="flex text-white underline gap-4 items-center mt-4">Resolvemos tus dudas
                <img className=" text-white" src={Arrow} alt="" /></p></Link>
        </div>
    );
}
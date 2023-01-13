import api from "../API/api"

export default function Card({ _id, img_url, brand, price, coffee }) {

    return (
        <>
            <div key={_id}
                className='flex flex-col items-center justify-center border-2 border-[#E3DED7] rounded-lg py-6' >
                <img className='pb-6' src={img_url} alt={'coffee bags'}></img>
                <p className='pb-3 font-bold'>{brand}</p>
                <p className='pb-6'>{price},00€</p>
                <button className='bg-green text-white text-sm p-2 rounded' onClick={() => api(console.log({coffee}.img_url, {coffee}.brand, {coffee}.price))}> Añadir </button>
            </div>
        </>
    )
}
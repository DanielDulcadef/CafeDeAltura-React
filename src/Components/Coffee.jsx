import { useEffect, useState } from 'react';
import api from '../API/api';
import Card from './Card';
import { Link } from 'react-router-dom';

export default function CoffeeCardsSection() {
    const [coffees, setCoffees] = useState([])
    const showCoffees = 4
    useEffect(() => {
        async function fetchCoffees() {
            const fetchedCoffees = await api()
            setCoffees(fetchedCoffees)
        }
        fetchCoffees()
    }, [])
    return (
        <div>
            <div className="flex justify-center py-5">
                <h2> <strong className='text-strong-green '>Novedades</strong> </h2>
            </div>
            < div className='grid grid-cols-4 gap-4 mx-10'>
                {coffees.products?.slice(0, showCoffees).map((coffee) => (
                    <Card img_url={coffee.img_url} _id={coffee._id} brand={coffee.brand} price={coffee.price} coffee={coffee.coffee} />)
                )}
            </div>
            <Link to="/tienda" className='flex justify-center py-5 underline' >Ver todos  → </Link>
        </div>

    )
}


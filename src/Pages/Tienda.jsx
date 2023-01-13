import { useState, useEffect } from 'react';
import Card from '../Components/Card';
import api from '../API/api';
import { NavBar } from '../Components/NavBar';
import { Condiciones } from '../Components/Condiciones';
import { Footer } from '../Components/Footer';

export default function Tienda() {
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    async function fetchCoffees() {
        const fetchedCoffees = await api()
        setCoffees(fetchedCoffees)
      }
      fetchCoffees()
    }, [])


  return (
    <>
    <NavBar />
    <h1 className='text-center text-2xl mt-10 mb-6 font-semibold text-green'>Últimos orígenes</h1>
      < div className='grid grid-cols-4 gap-4 mx-10'>
        {coffees.products?.map((coffee) => (
            <Card img_url={coffee.img_url} _id={coffee._id} brand={coffee.brand} price={coffee.price} coffee={coffee.coffee} />)
        )}
        </div>
        <Condiciones />
        <Footer />
    </>
  )
}
import './App.css';
import Tienda from './Pages/Tienda';
import Suscripcion from './Pages/Suscripcion';
import Para_Empresas from './Pages/Para_Empresas';
import Sobre_Nosotros from './Pages/Sobre_Nosotros';
import Contacto from './Pages/Contacto';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Header } from './Components/Header';
import { Condiciones } from './Components/Condiciones';
import Coffee from './Components/Coffee';
import { CoffeShop } from './Components/CoffeShop';
import { Formulario } from './Components/Formulario';
import { Footer } from './Components/Footer';
import Faq from './Components/Faq';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/tienda' element={<Tienda />} />
        <Route path='/suscripcion' element={<Suscripcion />} />
        <Route path='/para_empresas' element={<Para_Empresas />} />
        <Route path='/sobre_nosotros' element={<Sobre_Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/' element={<> <NavBar />
          <Header />
          <Condiciones />
          <Coffee />
          <Faq />
          <CoffeShop />
          <Formulario />
          <Footer />

        </>} />
      </Routes>
      {/* <NavBar/>
      <Header/>
      <Condiciones/>
      <Faq/>
      <CoffeShop/>
      <Formulario/>
      <Footer />
       */}

      {/* <Tienda/> */}
    </div>
  );
}

export default App;

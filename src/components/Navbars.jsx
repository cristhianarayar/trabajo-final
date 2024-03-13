import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import { MamamiaContext } from './PizzaContext';

const Navbars = () => {
    const {pizza}=useContext(MamamiaContext)
    const total = pizza.reduce((a, { count, price }) => a + price * count, 0)
    
    const FormatPrice = (price) =>{
      const format = new Intl.NumberFormat('de-DE',{
          minimumFractionDigits:0,
      })
      return format.format(price)
  }

  return (
    <>
      <Navbar className='nav'>
            <NavLink to='/' className='active'>
                <img className='icono-pizza' src="./src/assets/pizza.png" alt="icono pizza" />
                <span className='txt-pizza'>Pizzería Mamma Mía!</span>
            </NavLink>
            <NavLink to='/carrito' className='active'>
                <img className='icono-carro' src="./src/assets/carrito-de-compras.png" alt="icono carrito de compra" />
                <span className='txt-pizza'>$ {FormatPrice(total)}</span>
            </NavLink>
      </Navbar>
    </>
  );
};

export default Navbars;

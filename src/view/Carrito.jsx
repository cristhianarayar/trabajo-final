import { useContext } from "react"
import { MamamiaContext } from '../components/PizzaContext'
import { Button, Image } from "react-bootstrap"
import Swal from 'sweetalert2'

const Carrito = () =>{

    const { pizza , add, rest } = useContext(MamamiaContext)
    const total = pizza.reduce((a, { count, price }) => a + price * count, 0)

    const FormatPrice = (price) =>{
        const format = new Intl.NumberFormat('de-DE',{
            minimumFractionDigits:0,
        })
        return format.format(price)
    }

const Pagado = (total) =>{
    Swal.fire({
        icon:"success",
        title:"El total de su pedido $"+total+" fue pagado ",
    });
}

    return(
        <>
            <div className="detail">
                <h4>Detalles del pedido:</h4>
                {
                    pizza.map((compra,i)=>(
                        <div className="pedido" key={i}>
                            <div className="pedido-img">
                            <Image src={compra.img} className="img-comp" alt={compra.name}/>
                            <h5 className="txt-nom">{compra.name}</h5>
                            </div>
                            <div className="pedido-txt">
                            <h5 className="txt-val">$ {FormatPrice(compra.price*compra.count)}</h5>
                            <Button variant="danger" className="btn-comp1" onClick={()=>rest(i)}>-</Button>
                            <h5 className="txt-cont"> {compra.count} </h5>
                            <Button variant="primary" className="btn-comp2" onClick={()=>add(i)} >+</Button>
                            </div>
                        </div>
                    ))
                }
                <h3 className="txt-tot">Total: $ {FormatPrice(total)}</h3>
                <Button variant="success" onClick={()=>Pagado(FormatPrice(total))}> Ir a Pagar</Button>
            </div>
        </>
    )
}

export default Carrito
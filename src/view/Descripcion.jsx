import { NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Card, Image, Button } from "react-bootstrap"
import { useContext } from "react"
import { MamamiaContext } from "../components/PizzaContext"

const Descripcion = () => {
    const { id } = useParams()
    const{ agregarPizza } = useContext(MamamiaContext)
    const [pizza,setPizza] = useState([])
    const url = '/pizzas.json'

    const getPizza = async () =>{
        const response = await fetch(url)
        const data = await response.json()
        setPizza(data.find((pz)=> pz.id === `${id}`))
    }

    const FormatPrice = (price) =>{
        const format = new Intl.NumberFormat('de-DE',{
            minimumFractionDigits:0,
        })
        return format.format(price)
    }

    useEffect(()=>{
        getPizza()
    },[])


    return(
        <>
            <div className="desc">
                <Image className="desc-img" src={pizza.img} alt={pizza.name}/>
                <Card className="desc-card">
                    <Card.Title className="desc-tlt">{pizza.name}</Card.Title>
                    <hr />
                    <Card.Body className="desc-body">
                        <Card.Text>{pizza.desc}</Card.Text>
                        <Card.Text className='txt-ing'>Ingredientes :</Card.Text>
                        <ul className="ul-pizza">
                            <Card.Text>
                                {pizza.ingredients?.map((ing, i) => (
                                    <li className='txt-li' key={i}>
                                        🍕 {ing}
                                    </li>
                                ))}
                            </Card.Text>
                        </ul>
                        <Card.Text className='txt-price'>Precio: ${FormatPrice(pizza.price)}
                            <Button variant="danger" className='btn-desc' onClick={()=>agregarPizza(pizza)}>Añadir 🛒</Button>
                        </Card.Text>     
                    </Card.Body>
                </Card>
            </div>
            <NavLink to='/' >
                <Button variant="info" className='btn-back'>Volver 🏠</Button>
            </NavLink>
        </>
    )
}

export default Descripcion
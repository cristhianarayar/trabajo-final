import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { MamamiaContext } from '../components/PizzaContext'


const CardPizza = ({pizza}) => {
    const {desc,id,img,ingredients,name,price}=pizza
    const navigate = useNavigate()
    const { agregarPizza} = useContext(MamamiaContext)

    const FormatPrice = ({price}) =>{
        const format = new Intl.NumberFormat('de-DE',{
            minimumFractionDigits:0,
        })
        return format.format(price)
    }

    const descPizza = async () =>{
        navigate(`/pizza/${id}/${name}`)
    } 

    return(
        <>
            <Card className="card-pizza">
                <Card.Img className="img-pizza" src={img} />
                <Card.Header>
                    <Card.Title>{name}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text className='txt-ing'>Ingredientes :</Card.Text>
                    <ul className="ul-pizza">
                        <Card.Text>
                            {ingredients?.map((ing, i) => (
                                <li className='txt-li' key={i}>
                                    🍕 {ing}
                                </li>
                            ))}
                        </Card.Text>
                    </ul>                    
                </Card.Body>
                <Card.Footer>
                    <Card.Text className='txt-price'>$ {FormatPrice({price})}</Card.Text>
                    <Button variant="info" className='btn-ver' onClick={descPizza}>Ver Más 👀</Button>
                    <Button variant="danger" className='btn-suma' onClick={()=>agregarPizza(pizza)}>Añadir 🛒</Button>
                </Card.Footer>
            </Card>
        </>
    )
}

export default CardPizza

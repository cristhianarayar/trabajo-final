import { useState , useEffect } from 'react'
import Image from 'react-bootstrap/Image'
import CardPizza from '../components/CardPizza'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'

const Home = () => {
    const url = '/pizzas.json'
    const [pizza,setPizza] = useState([])

    const getPizza = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setPizza(data)
    }

    useEffect(()=>{
        getPizza()
    },[])

    return(
        <>
            <Image className='banner' src="./src/assets/Banner.png" alt="banner pizzeria mamma mia" fluid/>
            <Container>
                <Row className="center">
                    {
                    pizza.map((product,i)=>(
                            <Col md={4} key={i}>
                            <CardPizza pizza = {product}/>
                            </Col>
                    )) 
                    }
                </Row>
                <br /><br />
            </Container>
        </>
    )
}

export default Home
import { createContext , useState } from "react"
import { Alert } from "react-bootstrap"
import Swal from "sweetalert2"

export const MamamiaContext = createContext({})

const PizzaProvider = ({children}) => {

    const [pizza , setPizza] = useState([])
    const[contador,setContador]=useState(0)

    const Alerta = (img,name) => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Se agrega pizza "+name+" al carrito. Si para pagar haga click en el 🛒",
            showConfirmButton: false,
            timer: 3500,
            imageUrl: img,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        })
    }
    const agregarPizza = ({ id, price, name, img }) => {
        const productoEcontradoIndex = pizza.findIndex((p) => p.id === id);
        const producto = { id, price, name, img, count: 1 };
        if (productoEcontradoIndex >= 0) {
          pizza[productoEcontradoIndex].count++;
          setPizza([...pizza]);
        } else {
          setPizza([...pizza, producto]);
        
        }
        Alerta(img,name)
      }

      const add = (i) => {
        pizza[i].count++;
        setPizza([...pizza]);
      };
    
      const rest = (i) => {
        const { count } = pizza[i];
        if (count === 1) {

          pizza.splice(i, 1);
        } else {
          pizza[i].count--;
        }
        setPizza([...pizza]);
      }

    return(
        <>
            <MamamiaContext.Provider value={{contador,setContador,pizza,setPizza,agregarPizza,add,rest}}>
                {children}
            </MamamiaContext.Provider>
        </>
    )
}

export default PizzaProvider
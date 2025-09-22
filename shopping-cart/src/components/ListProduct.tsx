import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import type { Product } from "./Product"

export default function ListProduct() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const products = useSelector((state : any) => state.products)
  const dispatch = useDispatch()

  const handleAdd = (element: any) => {
    dispatch({
      type : "ADD_TO_CART",
      payload: element
    })
  }
  return (
    <div >
        <header>
          List Products
        </header>
        <div className="bodyList">
          {
            products.map((element) => 
            <div key={element.id} className='content'>
              <div>
                <img className='image' src={element.image} alt="" />
              </div>

              <div style={{width:"80%"}} >
                <div className='nameProduct'>{element.nameProduct}</div>
                <div>{element.description}</div>
              </div>

              <div>
                <div  className='quantity'>{element.quantity === 0 ? "" : element.quantity}</div>
                <button onClick={() => {handleAdd(element)}} className='price'>{element.price}</button>
              </div>
            </div>
            )
          }
        </div>
    </div>
  )
}


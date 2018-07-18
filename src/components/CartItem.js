import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
const CartItem =(props)=>{
  return(
    <li>
      {props.sale.name}
        <button onClick={()=>props.removeFromCartFunc(props.sale.id)}><i className="fa fa-trash"></i></button>
    </li>

  )
}
export default CartItem

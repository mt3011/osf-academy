import React, { useContext } from 'react'
import {ValueContext} from '../../contexts/InputValue'

//element == id


export default function Input(element) {
  
  const { CartList, setCartList } = useContext(ValueContext)


  function SendToCard() {
   console.log(CartList)
   setCartList([...CartList, element.value])

  }
  
  return (<button onClick={SendToCard}/>)
}
import './style.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {ValueContext} from '../../contexts/InputValue'


function Header({value, onChange}) {


  const { setInput } = useContext(ValueContext)
  
  function ChangeInput(event) {

    setInput(event.target.value)  

  }

  return (
    <div className="header">
      
      <Link to="/" className="link"> Home </Link>
      <div>
        <h1>E-Commerce</h1>
        <input type="text" placeholder="search" onChange={ ChangeInput }/>
      </div>
      <Link to="/cart" className="link"> Carrinho </Link>
      
    </div>
  )
}

export default Header
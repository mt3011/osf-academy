import './style.css'
import {ValueContext} from '../../contexts/InputValue'
import {useContext} from 'react'
import file from '../../assets/file'
import Input from './product'

const lista = file()

function Products() {

  const { input } = useContext(ValueContext)

  let listaFiltrada = lista.filter((element) => element.title
      .toLowerCase().includes(input.toLowerCase()))


  return (
    <div className="products">
      <h1>Products</h1>
        {
         listaFiltrada.map((element) => 
          <div key={element.id}>
            <h2>{element.title}</h2>
            <h3> - Categoria: {element.category}</h3>
            <h3> - Descrição: {element.description}</h3>
            <Input value={element.id}></Input>
          </div>)
        }
      
    </div>
  )
}

export default Products
import './style.css'

function Header({value, onChange}) {

  return (
    <div className="header">
      <h1>Header</h1>
      <input type="text" placeholder="search"/>
      
    </div>
  )
}

export default Header
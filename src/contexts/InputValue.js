import React, { createContext, useState } from 'react'


export const ValueContext = createContext()

export default function ValueProvider({children}) {

  const [input, setInput] = useState('')

  const [CartList, setCartList] = useState([])
  
  return (
    <ValueContext.Provider value={{
      input, setInput,
      CartList, setCartList
    }}>
      {children}
    </ValueContext.Provider>
  )
}



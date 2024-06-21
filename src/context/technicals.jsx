import { createContext, useState } from 'react'

// Get context and set a name
export const TechnicalsContext = createContext()

export function TechnicalsContextProvider(props) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <TechnicalsContext.Provider
      value={{
        isOpen,
        setIsOpen
      }}
    >
      {props.children}
    </TechnicalsContext.Provider>
  )
}
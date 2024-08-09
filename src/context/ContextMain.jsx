import { data } from 'autoprefixer';
import React, { createContext, useState } from 'react'

const Context =createContext()

export default function ContextMain(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [filter, setFilter] = useState('10');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
      };

       

    const toggleMenu =()=>{
        setIsOpen(!isOpen)
    }
  return (
   <Context.Provider value={{isOpen, toggleMenu, filter, handleFilterChange, }}>
   
    {
        props.children
    }

   </Context.Provider>
  )
}

export {Context};






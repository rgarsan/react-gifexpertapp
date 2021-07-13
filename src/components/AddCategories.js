import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategories = ({setCategories}) => {

const [inputValue, setinputValue] = useState ('')

const handelChage = (e)=>{
    setinputValue(e.target.value)
}

const handleSubmit = (e)=>{
    e.preventDefault()

    if(inputValue.trim().length > 2){
        
        setCategories (cats => [inputValue,...cats])
        setinputValue('')

    }
   
}
    return (
      
        <form onSubmit={handleSubmit}>
            <input 
            type= 'text'
            value={inputValue}
            onChange={handelChage}
        />
        </form>
        
    )

    
}
AddCategories.propTypes={
    setCategories:PropTypes.func.isRequired
}

import React, { useState } from 'react'

const useShowPassword = () => {
    const[showPassword,setShowPassword]=useState<boolean>(()=>{
      const stored = localStorage.getItem("passwordPreference");
      return stored ? JSON.parse(stored) : false;
    })
    const toggleShowPassword = () => {      
             setShowPassword((prev) => {
                const updated=!prev 
                localStorage.setItem("passwordPreference",JSON.stringify(updated))  
                return updated;
        });      
    };
  return {
    toggleShowPassword,
    showPassword
}
}

export default useShowPassword

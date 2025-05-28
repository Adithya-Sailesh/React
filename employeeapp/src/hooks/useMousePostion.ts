import { useEffect, useState } from "react"


const useMousePostion=()=>{
    const [mousePostion,setMousePostion]=useState({x:0,y:0})
    useEffect(()=>{
        const handleMouse = (event:MouseEvent ) => {
            setMousePostion({x:event.clientX,y:event.clientY})    
        }
        window.addEventListener("mousemove",handleMouse)
        return()=>(
            window.removeEventListener("mousemove",handleMouse)
        )
    },[])
    return mousePostion

}

export default useMousePostion
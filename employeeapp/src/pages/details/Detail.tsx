import { useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"

const Details=()=>{
    const {id}=useParams();
    const [status,setStatus]=useState("")
    const [age,setAge]=useState("")
    const [desc,setDesc]=useState("")
    const[searchParam,setSearchParam]=useSearchParams()
    const handleGet=()=>{
        setStatus(searchParam.get("status") ||"")
        setAge(searchParam.get("age") || "")
    }
    const handleSet=()=>{
        const newSearchParam=new URLSearchParams(searchParam)
        newSearchParam.set("status",desc)
        setSearchParam(newSearchParam)
    }
    return(
        <div>           
                    <h1>Employee Details</h1>
                    <h1>Age is :{age}</h1>
                    <h2>status is :{status}</h2>
                    <button onClick={handleSet}>Set </button> 
                    <input type="text"  onChange={(e)=>setDesc(e.target.value)}></input>  
                    <button onClick={handleGet}>Get</button>
                    
        </div>
    )
}

export default Details
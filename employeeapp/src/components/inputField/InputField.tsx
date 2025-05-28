
import type { RefObject } from "react"
import "./InputField.css"
import type React from "react"

const InputField=({id,title,type,value,onInputChange,ref,endAdd}:{id?:string,title:string,type:string,value:string,endAdd?:React.ReactNode,onInputChange:(input: string)=>void,ref?:RefObject<HTMLInputElement |null>})=>{
    return(
        <div className="rightcontainer-box2">
            <label className="labelleft">{title}</label>
            <input id={id} type={type} name="" value={value} onChange={(e) => onInputChange(e.target.value)} ref={ref} />
           { endAdd ? endAdd:null}
            
        </div>

    )
}   


export default InputField
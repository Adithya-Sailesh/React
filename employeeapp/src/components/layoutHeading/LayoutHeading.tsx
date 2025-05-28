import { useNavigate } from "react-router-dom"
import "./LayoutHeading.css"

const LayoutHeading=({head}:{head:string})=>{
    const navigate=useNavigate()
    return(
        <><div className="sec2">
            <h2>{head}
            
            </h2>
        </div>
       
        
        </>
    )
    
}

export default LayoutHeading
import { useNavigate } from "react-router-dom"
import "./LayoutHeading.css"
import { CiCirclePlus } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
const LayoutHeading=({head,editEmpId}:{head:string,editEmpId:boolean})=>{
    const navigate=useNavigate()
    const handleCreateEmlpoyeeClick=()=>{
        navigate("/employee")
    }
    return(
        <>
        <div className="sec2">
            <h2>{head}</h2>
            {editEmpId? (<div className="rightside">
                    <div className="filtersec">
                            Filter By
                        <select>
                            <option value="" hidden>Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Probation</option>
                        </select>
                    </div>
                <div className="createEmp" onClick={handleCreateEmlpoyeeClick}>
                <div style={{marginRight:"auto"}}><FaCirclePlus size={50} color="#03AEEE" /></div>
                <div style={{marginRight:"auto"}}>Create Employee</div>
            </div>
            
            </div>):("")}
            
        </div>
        </>
    )
    
}

export default LayoutHeading
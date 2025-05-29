import { useNavigate, useParams } from "react-router-dom"
import "./LayoutHeading.css"
import { CiCirclePlus } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
const LayoutHeading=({head,editEmpId}:{head:string,editEmpId:number})=>{
    const empid=useParams()
    const navigate=useNavigate()
    const handleCreateEmlpoyeeClick=()=>{
        navigate("/employee/create")
    }
    const handleEditEmployee=()=>{
        navigate(`/employee/edit/${empid.id }`)
    }
    return(
        <>
        <div className="sec2">
            <h2>{head}</h2>
            {
                editEmpId==0 && ("")
            }
            {
                editEmpId==1 && (<div className="rightside">
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
            
            </div>)
            }
            {
                editEmpId==2 && (
                    <div>
                        <div className="editfield" onClick={handleEditEmployee}>
                            <MdOutlineEdit className="innericon" size={40}/>
                            Edit
                        </div>
                    </div>
                    
                    )
            }
            
        </div>
        </>
    )
    
}

export default LayoutHeading
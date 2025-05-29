import "./ListBlock.css"
import { CiEdit } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";   
import { useNavigate } from "react-router-dom";
const ListBlock=({data,onClick}:{data:any,onClick:()=>void})=>{
    const navigate=useNavigate()
    const handleDelete=()=>{
        alert("are you sure")
    }
    const handleEdit=()=>{
        navigate('/employee/edit')

    }
    const colortab={
        "ACTIVE":"#D3F4BE",
        "INACTIVE":"#FFBFBF",
        "PROBATION":"#F5ECB8"
    }

    return(
    <div className="tile">
        <ul className="list-block">
            <li>{data.employeeName}</li>
            <li>{data.employeeId}</li>
            <li>{data.joiningDate}</li>
            <li>{data.Role}</li>
            <li  className="statusBg"  style={{backgroundColor:colortab[data.Status.toUpperCase()]}}>{data.Status}</li>
            <li>{data.Experience}</li>
            <li><FaTrash onClick={handleDelete} color="#FA4242"/><MdOutlineEdit onClick={handleEdit} /></li>
     </ul>
    </div>
    )
}


export default ListBlock
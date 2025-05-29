import "./ListBlock.css"
import { MdOutlineEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";   
import { useNavigate } from "react-router-dom";
import Popup from "../popup/Popup";
import { useState } from "react";
const ListBlock=({data}:{data:any})=>{
    const navigate=useNavigate()
    const [showPopup,setShowPopup]=useState(false)
    const handleDelete=()=>{
        setShowPopup(true)
        
    }
    const handleEdit=(id:string)=>{
        console.log("from List Block")
        navigate(`/employee/edit/${data.employeeId}`)
        
    }
    const confirmDelete=()=>{
        
        setShowPopup(false)
    }
    const cancelDelete=()=>{
        setShowPopup(false)
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
            <li><FaTrash onClick={(e)=>{
                    handleDelete()
                    e.stopPropagation()
            }
                
                
                } color="#FA4242"/><MdOutlineEdit onClick={(e)=>{
                handleEdit(data.employeeId)
                e.stopPropagation()
                }} /></li>
            {showPopup && <Popup msg="Are u Sure?" msg2="U are going to delete the field" onConfirm={confirmDelete } onCancel={cancelDelete}></Popup>}
     </ul>
    </div>
    )
}


export default ListBlock
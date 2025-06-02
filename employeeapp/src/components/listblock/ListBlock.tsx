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
        navigate(`/employee/edit/${data.id}`)
        
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
    <>
            <div className="tilee">
             <ul className="list-block">
            <li>{data.name ?? null}</li>
            <li>{data.employeeid ?? "null"}</li>
            <li>{data.dateOfJoining ? new Date(data.dateOfJoining).toLocaleDateString("en-GB") : "N/A"}</li>
            <li>{data.role}</li>
            <li  className="statusBg"  style={{backgroundColor:colortab[data.status.toUpperCase()]}}>{data.status}</li>
            <li>{data.experience}</li>
            <li><FaTrash onClick={(e)=>{
                    handleDelete()
                    e.stopPropagation()
            }
                
                
                } color="#FA4242"/><MdOutlineEdit onClick={(e)=>{
                handleEdit(data.id)
                e.stopPropagation()
                }} /></li>
            {showPopup && <Popup msg="Are u Sure?" msg2="U are going to delete the field" onConfirm={confirmDelete } onCancel={cancelDelete}></Popup>}
     </ul>
    </div>
    </>
    
    )
}


export default ListBlock
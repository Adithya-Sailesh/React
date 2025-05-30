import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import "./LayoutHeading.css"
import { CiCirclePlus } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { useState } from "react";
const LayoutHeading=({head,editEmpId}:{head:string,editEmpId:number})=>{
    const empid=useParams()
   
    const navigate=useNavigate()
    const[searchParam,setSearchParam]=useSearchParams("")
    const [selectedValue, setSelectedValue] = useState(''); 
    const handleCreateEmlpoyeeClick=()=>{
        navigate("/employee/create")
    }
    const handleEditEmployee=()=>{
        navigate(`/employee/edit/${empid.id }`)
    }
    const setFilter=(condition:string)=>{
        if(condition=="All"){
            setSearchParam("")
            return
        }
        const newSearchParam=new URLSearchParams(searchParam)
        newSearchParam.set("filter",condition)
        setSearchParam(newSearchParam)
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
                        <select value={selectedValue } onChange={(e)=>{setSelectedValue(e.target.value)
                            setFilter(e.target.value) 
                        }}>
                            <option hidden>Status</option>
                            <option value="All">All</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Probation">Probation</option>
                        </select>   
                    </div>
                <div className="createEmp" onClick={handleCreateEmlpoyeeClick}>
                <div style={{marginRight:"auto"}}><FaCirclePlus size={50} color="#03AEEE" /></div>
                <div style={{marginRight:"auto"}}>Create Employee</div>
            </div>
            
            </div>)
            }

                {
                editEmpId==4 && (
                <div className="createEmp" onClick={handleCreateEmlpoyeeClick}>
                <div style={{marginRight:"auto"}}><FaCirclePlus size={50} color="#03AEEE" /></div>
                <div style={{marginRight:"auto"}}>Create Employee</div>
            </div>
            
           )
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
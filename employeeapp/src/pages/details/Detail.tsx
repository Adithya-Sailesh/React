import { useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import LayoutHeading from "../../components/layoutHeading/LayoutHeading";
import "./Detail.css"
import EmployeeDB from "../../data/EmployeeDB";
const Details=()=>{
    const {id}=useParams();
    const employees=EmployeeDB
    const user=employees.find((emp)=>emp.employeeId==id)
    const colortab={
        "ACTIVE":"#D3F4BE",
        "INACTIVE":"#FFBFBF",
        "PROBATION":"#F5ECB8"
    }
    return(
        <div className="fullsec">           
                    <LayoutHeading head="Employee Detail" editEmpId={2}></LayoutHeading>
                    <div className="mainbox">
                        <div className="box1">
                            <div className="individual">
                                <h3>Employee Name</h3>
                                <h5>{user?.employeeName}</h5>
                            </div>
                            <div className="individual">
                                <h3>Joining Date</h3>
                                <h5>{user?.joiningDate}</h5>
                            </div>
                            <div className="individual">
                                <h3>Experience</h3>
                                <h5>{user?.Experience}</h5>
                            </div>
                            <div className="individual">
                                <h3>Role</h3>
                                <h5>{user?.Role}</h5>
                            </div>
                            <div className="individual indstatus">
                                <h3>Status</h3>
                                <h5 style={{backgroundColor:colortab[user.Status.toUpperCase()]}}>{user?.Status}</h5>
                            </div>  
                        </div>
                        <div className="box2">
                            <div className="individual">
                                <h3>Address</h3>
                                <h5>Model Engineering College</h5>
                            </div>
                            <div className="individual">
                                <h3>Employee ID</h3>
                                <h5>{user?.employeeId}</h5>
                            </div> 
                        </div>
                        
                    </div>
        </div>
    )
}

export default Details
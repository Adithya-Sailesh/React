import { useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import LayoutHeading from "../../components/layoutHeading/LayoutHeading";
import "./Detail.css"
import EmployeeDB from "../../data/EmployeeDB";
import { useSelector } from "react-redux";
import {  useGetEmployeeQuery } from "../../api-service/employees/employees.api";
const Details=()=>{
    const {id}=useParams();
    const cond=Number(id)
    const {data: singleEmployeeData}=useGetEmployeeQuery({id:cond})

    // const data=useSelector((state)=>state)
    // const employees=EmployeeDB
    // const employees= data?.employee.employees
    // console.log("emp",employees)
    // const user=response?.find((emp:any)=>emp.employeeid==id)
    const user=singleEmployeeData
    console.log("user",user)
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
                                <h5>{user?.name}</h5>
                            </div>
                            <div className="individual">
                                <h3>Joining Date</h3>
                                <h5>{user?.dateOfJoining ? new Date(user.dateOfJoining).toLocaleDateString("en-GB") : "N/A"}</h5>
                            </div>
                            <div className="individual">
                                <h3>Experience</h3>
                                <h5>{user?.experience}</h5>
                            </div>
                            <div className="individual">
                                <h3>Department Number</h3>
                                <h5>{user?.department? user?.department?.id : " NaN"}</h5>
                            </div>
                            <div className="individual">
                                <h3>Role</h3>
                                <h5>{user?.role}</h5>
                            </div>
                            <div className="individual indstatus">
                                <h3>Status</h3>
                                <h5 style={{backgroundColor: user ? colortab[user?.status]:"green"}}>{user?.status}</h5>
                            </div>  
                        </div>
                        <div className="box2">
                            <div className="individual">
                                <h3>Address</h3>
                                <h5>{user?.address.houseNo ?? 'House No'}</h5>
                                <h5>{user?.address.line1 ?? 'line1'}</h5>
                                <h5>{user?.address.line2 ?? 'line2'}</h5>
                                <h5>{user?.address.pincode ?? 'Pincode'}</h5>
                            </div>
                            <div className="individual">
                                <h3>Employee ID</h3>
                                <h5>{user?.employeeid}</h5>
                            </div> 
                        </div> 
                        
                    </div>
        </div>
    )
}

export default Details
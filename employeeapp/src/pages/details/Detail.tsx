import { useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import LayoutHeading from "../../components/layoutHeading/LayoutHeading";
import "./Detail.css"
const Details=()=>{
    const {id}=useParams();
    
    return(
        <div className="fullsec">           
                    <LayoutHeading head="Employee Detail" editEmpId={false}></LayoutHeading>
                    <div className="mainbox">
                        <div className="box1">
                            <div className="individual">
                                <h3>Employee Name</h3>
                                <h5>Vishnu</h5>
                            </div>
                            <div className="individual">
                                <h3>Joining Date</h3>
                                <h5>12.01.2025</h5>
                            </div>
                            <div className="individual">
                                <h3>Experience</h3>
                                <h5>2years</h5>
                            </div>
                            <div className="individual">
                                <h3>Role</h3>
                                <h5>Full Stack</h5>
                            </div>
                            <div className="individual">
                                <h3>Status</h3>
                                <h5>Probation</h5>
                            </div>  
                        </div>
                        <div className="box2">
                            <div className="individual">
                                <h3>Address</h3>
                                <h5>Model Engineering College</h5>
                            </div>
                            <div className="individual">
                                <h3>Employee ID</h3>
                                <h5>CS073738H</h5>
                            </div> 
                        </div>
                        
                    </div>
        </div>
    )
}

export default Details
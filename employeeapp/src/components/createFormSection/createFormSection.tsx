import { useParams } from "react-router-dom"
import Button from "../button/Button"
import LayoutHeading from "../layoutHeading/LayoutHeading"
import SelectComponent from "../selectComponent/SelectComponent"
import  "./createFormSection.css"
import EmployeeDB from "../../data/EmployeeDB"


const CreateFormSection=({editEmpId}:{editEmpId:number})=>{
    const empid=useParams()
    const employees=EmployeeDB
    const user=employees.find((e)=>e.employeeId==empid.id)
    return(
        <>
        <LayoutHeading  head={editEmpId ? `Edit Employee: ${user?.employeeName}`:"Create Employee" } editEmpId={editEmpId}></LayoutHeading>
         <form>
                        <div className="formbox">
                            <div className="inputbox">
                                <label>Employee Name</label>
                                <input type="text" name="" id="" placeholder="Employee Name" required/>
                            </div>
                            { editEmpId ? (<div className="inputbox">
                                <label>EmployeeId</label>
                                <input type="text" name="" id="" placeholder="EmpId" />
                            </div>):("")
                            }
                            <div className="inputbox">
                                <label>Employee Age</label>
                                <input type="number" name="" id="" placeholder="Employee Age" required/>
                            </div>
                            <div className="inputbox">
                                <label>Employee Password</label>
                                <input type="password" name="" id="" placeholder="Employee Password" required/>
                            </div>
                            <div className="inputbox">
                                <label>Joining date</label> 
                                <input type="date" name="" id="" placeholder="Joining date" required/>
                            </div>
                            <div className="inputbox">
                                <label>Experience</label>
                                <input type="text" name="" id="" placeholder="Years" required/>
                            </div>
                            <div className="inputbox">
                                <SelectComponent labeltext="Department" title="Choose Department" options={["Dept1","Dept2"]}></SelectComponent>
                            </div> 
                            <div className="inputbox">
                                <SelectComponent labeltext="Role" title="Choose Role" options={["DEV","HR","UI","UX"]}></SelectComponent>
                            </div>
                            <div className="inputbox">
                                <SelectComponent labeltext="Status" title="Choose Status" options={["ACTIVE","INACTIVE","PROBATION"]}></SelectComponent>
                            </div>
                            <div className="inputbox Addressbox">
                                <label>Address</label>
                                <input type="text" name="" id="" placeholder="Flat No. /House No"/>
                                <input type="text" name="" id="" placeholder="Address Line 1" />
                                <input type="text" name="" id="" placeholder="Address Line 2" />
                                <input type="text" name="" id="" placeholder="Pincode" />
                            </div>
                            
                        </div>
                        <div style={{margin:"20px"}}>
                            <div className="form_button">
                                <Button type="submit" label="Submit" ></Button>
                                <Button type="reset" label="Cancel" ></Button>
                            </div>
                        </div>           
                    </form>
        </>
    )
}


export default CreateFormSection
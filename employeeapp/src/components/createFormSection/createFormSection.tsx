import { useParams } from "react-router-dom"
import Button from "../button/Button"
import LayoutHeading from "../layoutHeading/LayoutHeading"
import SelectComponent from "../selectComponent/SelectComponent"
import  "./createFormSection.css"
import EmployeeDB from "../../data/EmployeeDB"
import { useEffect, useState } from "react"
import Store from "../../store/store"
import { useDispatch } from "react-redux"

const CreateFormSection=({editEmpId}:{editEmpId:number})=>{
    const dispatch=useDispatch()
    const empid=useParams()
    const employees=EmployeeDB
    const user=employees.find((e)=>e.employeeId==empid.id)
    
    const [values,setValues]=useState({
      employeeName: "",
        employeeAge:"",
        email:"",
        employeePassword:"",
        employeeId: "",
        joiningDate: "",
        department:"",
        Role: "",
        Status: "",
        Experience: "",
        line1:"",
        line2:"",
        houseno:"",
        pincode:""
    })


useEffect(() => {
        if (user && empid) {
            setValues({
            employeeName: user.employeeName,
            email: user.email || "",    
            employeeAge: user.employeeAge || "",
            employeePassword: "",
            employeeId: user.employeeId,
            joiningDate: user.joiningDate,
            department: user.department || "",
            Role: user.Role,
            Status: user.Status,
            Experience: user.Experience,
            line1: user.line1 || "",
            line2: user.line2 || "",
            houseno: user.houseno || "",
            pincode:user.pincode || "",
            });
        }
        else {
    
    setValues({
      employeeName: "",
      employeeAge: "",
      email:"",
      employeePassword: "",
      employeeId: "",
      joiningDate: "",
      department: "",
      Role: "",
      Status: "",
      Experience: "",
      line1: "",
      line2: "",
      houseno: "",
      pincode: ""
    });
  }
},[empid,user]);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
//   console.log("Form submitted", values);
  const action={type:'employee/CREATE',payload:values}
  dispatch(action)
  alert("Data Added")
};


    return(
        <>
        <LayoutHeading  head={editEmpId ? `Edit Employee: ${user?.employeeName}`:"Create Employee" } editEmpId={editEmpId}></LayoutHeading>
         <form onSubmit={handleSubmit}>
                        <div className="formbox">
                            <div className="inputbox">
                                <label>Employee Name</label>
                                <input type="text" name="" id="employeeName"  value={values.employeeName} onChange={(e)=>setValues({...values, employeeName: e.target.value})} placeholder="Employee Name" required/>
                            </div>
                            { editEmpId ? (<div className="inputbox">
                                <label>EmployeeId</label>
                                <input type="text" name="" id="employeeId" placeholder="EmpId"  value={values.employeeId} onChange={(e)=>setValues({...values, employeeId: e.target.value})}/>
                            </div>):("")
                            }
                            <div className="inputbox">
                                <label>Email</label>        
                                <input type="email" name="" id="" placeholder="Employee email" value={values.email} onChange={(e)=>setValues({...values, email: e.target.value})} required/>
                            </div>

                            <div className="inputbox">
                                <label>Employee Age</label>
                                <input type="number" name="" id="" placeholder="Employee Age" value={values.employeeAge} onChange={(e)=>setValues({...values, employeeAge: e.target.value})} required/>
                            </div>
                            <div className="inputbox">
                                <label>Employee Password</label>
                                <input type="password" name="" id="" placeholder="Employee Password" value={values.employeePassword} onChange={(e)=>setValues({...values, employeePassword: e.target.value})} required/>
                            </div>
                            <div className="inputbox">
                                <label>Joining date</label> 
                                <input type="date" name="" id="" placeholder="Joining date" value={values.joiningDate} onChange={(e)=>setValues({...values, joiningDate: e.target.value})}required/>
                            </div>
                            <div className="inputbox">
                                <label>Experience</label>
                                <input type="text" name="" id="" placeholder="Years" value={values.Experience} onChange={(e)=>setValues({...values, Experience: e.target.value})} required/>
                            </div>
                            <div className="inputbox">
                                <SelectComponent labeltext="Department" title="Choose Department" options={["Dept1","Dept2"] } onChange={(e)=>setValues({...values, department: e.target.value})} ></SelectComponent>
                            </div> 
                            <div className="inputbox">
                                <SelectComponent labeltext="Role" title="Choose Role" options={["DEV","HR","UI","UX"]} onChange={(e)=>setValues({...values, Role: e.target.value})}></SelectComponent>
                            </div>
                            <div className="inputbox">
                                <SelectComponent labeltext="Status" title="Choose Status" options={["ACTIVE","INACTIVE","PROBATION"]} onChange={(e)=>setValues({...values, Status: e.target.value})}></SelectComponent>
                            </div>
                            <div className="inputbox Addressbox">
                                <label>Address</label>
                                <input type="text" name="" id="" placeholder="Flat No. /House No" value={values.houseno} onChange={(e)=>setValues({...values, houseno: e.target.value})}/>
                                <input type="text" name="" id="" placeholder="Address Line 1" value={values.line1} onChange={(e)=>setValues({...values, line1: e.target.value})}/>
                                <input type="text" name="" id="" placeholder="Address Line 2" value={values.line2} onChange={(e)=>setValues({...values, line2: e.target.value})}/>
                                <input type="text" name="" id="" placeholder="Pincode" value={values.pincode} onChange={(e)=>setValues({...values, pincode: e.target.value})}/>
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
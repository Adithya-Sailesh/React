import { Link, useNavigate, useParams } from "react-router-dom"
import Button from "../button/Button"
import LayoutHeading from "../layoutHeading/LayoutHeading"
import SelectComponent from "../selectComponent/SelectComponent"
import  "./createFormSection.css"
import { useEffect, useState } from "react"
import { useCreateemployeeMutation, useEditemployeeMutation, useGetEmployeeListQuery } from "../../api-service/employees/employees.api"

const CreateFormSection=({editEmpId}:{editEmpId:number})=>{
    const [createEmployee]=useCreateemployeeMutation()
    const [editEmployee]=useEditemployeeMutation()
    const navigate=useNavigate()
    const empid=useParams()
    const cond=Number(empid.id)
    const {data:getAll}=useGetEmployeeListQuery({})
    console.log("Employeefrom",getAll)
    const user=getAll?.find((e:any)=>e.id==cond)
    console.log("user",user)
    const [values,setValues]=useState({
        name: "",
        age:"",
        email:"",
        employeePassword:"",
        employeeId: "",
        joiningDate: "",
        department:"",
        role: "",
        status: "",
        experience: "",
        address:{
          line1:"",
          line2:"",
          houseNo:"",
          pincode:""
          } 
    })


useEffect(() => {
        if (user && empid) {
            const formattedDate = user.dateOfJoining?.split("T")[0] || ""; 
            console.log("date",formattedDate)
            setValues({
            name: user.name,
            joiningDate:formattedDate,
            email: user.email || "",    
            age: user.age || "",
            employeePassword: "",
            employeeId: user.employeeid,
            department:String(user?.department?.id|| ""),  
            role: user.role,
            status: user.status,
            experience: user.experience,
            address:{
                line1:user?.address.line1||"",
                line2:user?.address.line2 || "",
                houseNo:user?.address.houseNo || "",
                pincode:user?.address.pincode|| ""
                }
            });
        }
        else {
    
    setValues({
      name: "",
      age: "",
      email:"",
      employeePassword: "",
      employeeId: "",
      joiningDate: "",
      department: "",
      role: "",
      status: "",
      experience: "",
       address:{
          line1:"",
          line2:"",
          houseNo:"",
          pincode:""
          }
    });
  }
},[empid,user]);

const handleSubmit = async(e: React.FormEvent) => {
  e.preventDefault();
const payload = {
    name: values.name,
    email: values.email,
    age: Number(values.age),
    role: values.role,
    dept_id: Number(values.department),
    password:values.employeePassword,
    employeeId: values.employeeId,
    dateOfJoining: values.joiningDate,
    experience: Number(values.experience),
    status: values.status,
    address: values.address,
};

  
   try {
    if (cond) {
      await editEmployee({ payload ,id: cond}).unwrap();
      alert("Employee updated successfully");
    } else {
      await createEmployee(payload).unwrap();
      alert("Employee created successfully");
    }
    // navigate("/");
  } catch (error) {
    console.error("Error:", error.data.message);
    alert(error.data.message);
  }
   navigate("/")
  }

;
    return(
        <>
        <LayoutHeading  head={editEmpId ? `Edit Employee: ${user?.name}`:"Create Employee" } editEmpId={editEmpId}></LayoutHeading>
         <form onSubmit={handleSubmit} className="mainformbox">
                        <div className="formbox">
                            <div className="inputbox">
                                <label>Employee Name</label>
                                <input type="text" name="" id="name"  value={values.name} onChange={(e)=>setValues({...values, name: e.target.value})} placeholder="Employee Name" required/>
                            </div>
                            { editEmpId ? (<div className="inputbox">
                                <label>EmployeeId</label>
                                <input style={{backgroundColor:"grey"}} type="text" name="" id="employeeId" placeholder={values.employeeId} disabled={true} value={values.employeeId} onChange={(e)=>setValues({...values, employeeId: e.target.value})}/>
                            </div>):(<div className="inputbox">
                                <label>EmployeeId</label>
                                <input type="text" name="" id="employeeId" placeholder="EmpId"   value={values.employeeId} onChange={(e)=>setValues({...values, employeeId: e.target.value})}/>
                            </div>)
                            }
                            <div className="inputbox">
                                <label>Email</label>            
                                <input type="email" name="" id="" placeholder="Employee email" value={values.email} onChange={(e)=>setValues({...values, email: e.target.value})} required/>
                            </div>

                            <div className="inputbox">
                                <label>Employee Age</label>
                                <input type="number" name="" id="" placeholder="Employee Age" value={values.age} onChange={(e)=>setValues({...values, age: e.target.value})} required/>
                            </div>
                            <div className="inputbox">
                                <label>Employee Password</label>
                                <input type="password" name="" id=""  placeholder="Employee Password" value={values.employeePassword} onChange={(e)=>setValues({...values, employeePassword: e.target.value})} required/>
                            </div>
                            
                            <div className="inputbox">
                                <label>Joining date</label> 
                                <input type="date" name="" id="" placeholder="Joining date" value={values.joiningDate} onChange={(e)=>setValues({...values, joiningDate: e.target.value})}required/>
                            </div>
                            <div className="inputbox">
                                <label>experience</label>
                                <input type="text" name="" id="" placeholder="Years" value={values.experience} onChange={(e)=>setValues({...values, experience: e.target.value})} required/>
                            </div>
                            <div className="inputbox">
                                <SelectComponent value={values.department} labeltext="Department" title="Choose Department" options={["1","2","3","4","5","6"] } onChange={(e:any)=>setValues({...values, department: e.target.value})} ></SelectComponent>
                            </div> 
                            <div className="inputbox">
                                <SelectComponent value={values.role} labeltext="role" title="Choose role" options={["DEVELOPER","HR","UI","UX"]} onChange={(e:any)=>setValues({...values, role: e.target.value})}></SelectComponent>
                            </div>  
                            <div className="inputbox">
                                <SelectComponent  value={values.status} labeltext="status" title="Choose status" options={["ACTIVE","INACTIVE","PROBATION"]} onChange={(e:any)=>setValues({...values, status: e.target.value})}></SelectComponent>
                            </div>
                            
                        </div>
                        <div className="inputbox Addressbox">
                                <label>Address</label>
                                <input type="text" name="" id="" placeholder="Flat No. /House No" value={values.address.houseNo} onChange={(e)=>setValues({...values,address: {...values.address,houseNo: e.target.value,}})}/>
                                <input type="text" name="" id="" placeholder="Address Line 1" value={values.address.line1} onChange={(e)=>setValues({...values,address: {...values.address,line1: e.target.value,}})}/>
                                <input type="text" name="" id="" placeholder="Address Line 2" value={values.address.line2} onChange={(e)=>setValues({...values,address: {...values.address,line2: e.target.value,}})}/>
                                <input type="text" name="" id="" placeholder="Pincode" value={values.address.pincode} onChange={(e)=>setValues({...values,address: {...values.address,pincode: e.target.value,}})}/>
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
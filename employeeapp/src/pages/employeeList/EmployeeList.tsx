
import { useNavigate } from "react-router-dom"
import LayoutHeading from "../../components/layoutHeading/LayoutHeading"
import ListBlock from "../../components/listblock/ListBlock"
import "./EmployeeList.css"
import EmployeeDB from "../../data/EmployeeDB"
const EmployeeList = () => {
    const navigate=useNavigate()
      const employees=EmployeeDB
  const handleClick=(Id:string)=>{
    console.log("Clicked")
    navigate(`${Id}`)
  }


  return (
    <>
    <LayoutHeading head={"Employee List"} editEmpId={true}></LayoutHeading>
    <div className="EmployeeBox">
        <ul className="employeeHeader">
          <li>Employee Name</li>
          <li>Employee Id</li>
          <li>Joining Date</li>
          <li>Role</li>
          <li>Status</li>
          <li>Experience</li>
          <li>Action</li>
      </ul>
    </div>
      <div className="list-tile">
        { employees.map((employee,index)=>(
            <div onClick={()=>handleClick(employee.employeeId)}><ListBlock key={index} data={employee} ></ListBlock></div>
              
        ))}
        
      </div>
    </>
  )
}

export default EmployeeList

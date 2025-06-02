
import { useNavigate, useSearchParams } from "react-router-dom"
import LayoutHeading from "../../components/layoutHeading/LayoutHeading"
import ListBlock from "../../components/listblock/ListBlock"
import "./EmployeeList.css"
import EmployeeDB from "../../data/EmployeeDB"
import { useSelector } from "react-redux"
import { useGetEmployeeListQuery } from "../../api-service/employees/employees.api"
const EmployeeList = () => {
  const navigate=useNavigate()
  const getAll=useGetEmployeeListQuery()
  const response=getAll.currentData
  console.log("from db",response)
  const handleClick=(Id:string)=>{
    console.log("Clicked")
    navigate(`${Id}`)
  }
  const[searchParam,setSearchParam]=useSearchParams()
  const condition=searchParam.get("filter")?.toUpperCase()
  const emp= condition?
     response.filter((e:any) => {return e.status === condition})
    :response
 
  return (
    <>
    <LayoutHeading head={"Employee List "} editEmpId={1}></LayoutHeading>
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
        { emp?.map((employee,index)=>(
            <div key={index} onClick={()=>handleClick(employee.id)}><ListBlock key={index} data={employee} ></ListBlock></div>
              
        ))}
        
      </div>
    </>
  )
}

export default EmployeeList


import { useNavigate } from "react-router-dom"
import LayoutHeading from "../../components/layoutHeading/LayoutHeading"
import ListBlock from "../../components/listblock/ListBlock"
import "./EmployeeList.css"
const EmployeeList = () => {
    const navigate=useNavigate()
      const employees = [
    {
      employeeName: "Alice",
      employeeId: "E001",
      joiningDate: "2022-01-01",
      Role: "Developer",
      Status: "Active",
      Experience: "2 years",
    },
    {
      employeeName: "Bob",
      employeeId: "E002",
      joiningDate: "2021-05-12",
      Role: "Designer",
      Status: "Inactive",
      Experience: "3 years",
    },
    {
      employeeName: "Charlie",
      employeeId: "E003",
      joiningDate: "2023-03-15",
      Role: "Tester",
      Status: "Probation",
      Experience: "1 year",
    },
    {
      employeeName: "Diana",
      employeeId: "E004",
      joiningDate: "2020-11-05",
      Role: "Manager",
      Status: "Active",
      Experience: "5 years",
    },
    {
      employeeName: "Ethan",
      employeeId: "E005",
      joiningDate: "2024-01-10",
      Role: "Intern",
      Status: "Probation",
      Experience: "6 months",
    },
    {
      employeeName: "Fiona",
      employeeId: "E006",
      joiningDate: "2022-07-20",
      Role: "Developer",
      Status: "Active",
      Experience: "2 years",
    },
    {
      employeeName: "George",
      employeeId: "E007",
      joiningDate: "2019-02-25",
      Role: "Support",
      Status: "Inactive",
      Experience: "6 years",
    },
    {
      employeeName: "Hannah",
      employeeId: "E008",
      joiningDate: "2023-09-01",
      Role: "HR",
      Status: "Active",
      Experience: "1 year",
    },
    {
      employeeName: "Ivan",
      employeeId: "E009",
      joiningDate: "2021-06-30",
      Role: "Tester",
      Status: "Probation",
      Experience: "2.5 years",
    },
    {
      employeeName: "Julia",
      employeeId: "E010",
      joiningDate: "2020-12-12",
      Role: "Manager",
      Status: "Active",
      Experience: "4 years",
    },
    {
      employeeName: "Bob",
      employeeId: "E002",
      joiningDate: "2021-05-12",
      Role: "Designer",
      Status: "Inactive",
      Experience: "3 years",
    },
    {
      employeeName: "Bob",
      employeeId: "E002",
      joiningDate: "2021-05-12",
      Role: "Designer",
      Status: "Inactive",
      Experience: "3 years",
    },
    {
      employeeName: "Bob",
      employeeId: "E002",
      joiningDate: "2021-05-12",
      Role: "Designer",
      Status: "Inactive",
      Experience: "3 years",
    },
    {
      employeeName: "Fiona",
      employeeId: "E006",
      joiningDate: "2022-07-20",
      Role: "Developer",
      Status: "Active",
      Experience: "2 years",
    },
    {
      employeeName: "George",
      employeeId: "E007",
      joiningDate: "2019-02-25",
      Role: "Support",
      Status: "Inactive",
      Experience: "6 years",
    },
    {
      employeeName: "Hannah",
      employeeId: "E008",
      joiningDate: "2023-09-01",
      Role: "HR",
      Status: "Active",
      Experience: "1 year",
    },
    {
      employeeName: "Fiona",
      employeeId: "E006",
      joiningDate: "2022-07-20",
      Role: "Developer",
      Status: "Active",
      Experience: "2 years",
    },
    {
      employeeName: "George",
      employeeId: "E007",
      joiningDate: "2019-02-25",
      Role: "Support",
      Status: "Inactive",
      Experience: "6 years",
    },
    {
      employeeName: "Hannah",
      employeeId: "E008",
      joiningDate: "2023-09-01",
      Role: "HR",
      Status: "Active",
      Experience: "1 year",
    },
    {
      employeeName: "Hannah",
      employeeId: "E008",
      joiningDate: "2023-09-01",
      Role: "HR",
      Status: "Active",
      Experience: "1 year",
    },
  ];

  const handleClick=(employeeId:string)=>{
    console.log("Clicked")
    navigate(`employee/${employeeId}`)
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
        { employees.map((employee)=>(
              <ListBlock data={employee} onClick={()=>handleClick(employee.employeeId)}></ListBlock>
        ))}
        
      </div>
    </>
  )
}

export default EmployeeList

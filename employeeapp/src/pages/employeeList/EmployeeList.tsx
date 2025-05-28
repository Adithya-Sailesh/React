
import LayoutHeading from "../../components/layoutHeading/LayoutHeading"
import ListBlock from "../../components/listblock/ListBlock"
import "./EmployeeList.css"
const EmployeeList = () => {
  return (
    <>
    <LayoutHeading head={"Employee List"}></LayoutHeading>
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
        <ListBlock></ListBlock>
        <ListBlock></ListBlock>
        <ListBlock></ListBlock>
        <ListBlock></ListBlock>
        <ListBlock></ListBlock>
        <ListBlock></ListBlock>
      </div>
    </>
  )
}

export default EmployeeList

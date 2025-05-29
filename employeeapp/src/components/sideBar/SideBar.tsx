import { useNavigate } from "react-router-dom"
import "./SideBar.css"

const SideBar=()=>{
    const navigate=useNavigate()
    const handleEmlpoyeeListClick=()=>{
            navigate("/employee")
    }
    const handleCreateEmlpoyeeClick=()=>{
        navigate("/employee/create")
    }
    return(
            <aside className="sidebar-nav">
                <header > <img style={{padding: "20px",backgroundColor:"#F9FAFE"}}src="/assets/kv-logo.png" alt="" width="300px" /> </header>
                <nav>
                   <ul>
                        <li onClick={handleEmlpoyeeListClick} > <img src="/assets/icon.svg"/> Employee List</li>
                        <li onClick={handleCreateEmlpoyeeClick} > <img src="/assets/icon.svg" /> Create Employee</li>
                   </ul>
                </nav>    
                <button className="logout-button" onClick={()=>{
                    localStorage.setItem("isLoggedIn","false") 
                    navigate("/")} }>Logout</button>    
        </aside>

    )
}


export default SideBar
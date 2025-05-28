import { useNavigate } from "react-router-dom"
import "./SideBar.css"

const SideBar=()=>{
    const navigate=useNavigate()
    return(
            <aside >
                <header > <img style={{padding: "20px"}}src="./src/assets/kv-logo.png" alt="" width="300px" /> </header>
                <nav>
                   <ul>
                        <li > <img src="./src/assets/icon.svg" style={{scale:1.5,borderRadius:"50%",backgroundColor:"white",marginRight:"5px"}}/> Employee List</li>
                   </ul>
                </nav>    
                <button onClick={()=>{
                    localStorage.setItem("isLoggedIn","false") 
                    navigate("/")} }>Logout</button>
        </aside>

    )
}


export default SideBar
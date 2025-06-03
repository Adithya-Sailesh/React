
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import LayoutHeading from "../../components/layoutHeading/LayoutHeading"
import SideBar from "../../components/sideBar/SideBar"
import "./Layout.css"

const Layout =()=>{
    const isLoggedCheck=()=>{
                const islogged=localStorage.getItem("isLoggedIn")
                return islogged=="true";
    }
    if (!isLoggedCheck()) return <Navigate to='/' />    
    return(
        <>
        <main ><div className="sidebar-container">
            <SideBar></SideBar>
            </div>  
            
            <div className="right-side">
                <section className="sec1"> </section>
                <section className="sec3">
                    <Outlet></Outlet>
                </section>
            </div>
        </main>
    </>
    )
}
export default Layout



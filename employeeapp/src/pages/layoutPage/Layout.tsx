
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
        <main >  
            <SideBar></SideBar>
            <div className="right-side">
                <section className="sec1"> </section>
                {/* <section className="sec2">
                    <LayoutHeading head="Create Employee"></LayoutHeading>
                </section> */}
                <section className="sec3">
                    <Outlet></Outlet>
                </section>
            </div>
        </main>
    </>
    )
}
export default Layout




// import React from "react";
// import "./layout.css";


// const Layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <>
//       <body className="layout-body">
//         <SideBar></SideBar>
//         <main className="layout-main">{children}</main>
//       </body>
//     </>
//   );
// };


// export default Layout

import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from 'react-router-dom'
import './App.css'
import CreateEmployee from './pages/createEmployee/CreateEmployee'
import Layout from './pages/layoutPage/Layout'
import Login from './pages/login/Login'
import UncontrolledLogin from './pages/login/UncontrolledLogin'
import NotFound from './pages/notFound/NotFound'
// import Login from './pages/login/Login'

function App() {
  
  const router=createBrowserRouter([{

    
    path:"/",
    element:<Login/>
  },{
    path:"/employee",
    element:<Layout/>,

    children:[
      // {index:true,element}
      {path:"" ,element:<CreateEmployee></CreateEmployee>}
    ]
  },{
    path:"*", 
    element:<NotFound></NotFound>
  }])
  return (
   <>
   <RouterProvider router={router}>


   </RouterProvider>
    {/* <Login></Login > */}
    {/* <Layout></Layout> */}
    {/* <CreateEmployee></CreateEmployee> */}
    {/* <UncontrolledLogin></UncontrolledLogin> */}
   </>
  )
} 

export default App

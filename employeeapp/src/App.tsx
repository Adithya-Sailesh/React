
import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from 'react-router-dom'
import './App.css'
import CreateEmployee from './pages/createEmployee/CreateEmployee'
import Layout from './pages/layoutPage/Layout'
import Login from './pages/login/Login'
import UncontrolledLogin from './pages/login/UncontrolledLogin'
import NotFound from './pages/notFound/NotFound'
import Details from './pages/details/Detail'
import CreateFormSection from './components/createFormSection/createFormSection'
import EmployeeList from './pages/employeeList/EmployeeList'
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
      {path:"" ,element:<CreateFormSection editEmpId={false}></CreateFormSection>},
      {path:":id",element:<Details></Details>},
      {path:"edit",element:<CreateFormSection editEmpId={true}/>},
      {path:"view",element:<EmployeeList></EmployeeList>}
    ]
  },
  
  {
    path:"*", 
    element:<NotFound></NotFound>
  }])

  return (
   <>
   <RouterProvider router={router}>
   </RouterProvider>
   </>
  )
} 

export default App

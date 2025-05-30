
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
import { Provider } from 'react-redux'
import Store from './store/store'
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
      {path:"",element:<EmployeeList></EmployeeList>},
      {path:"create" ,element:<CreateFormSection editEmpId={0}></CreateFormSection>},
      {path:"edit/:id",element:<CreateFormSection editEmpId={4}/>},
      {path:":id",element:<Details></Details>},
    ]
  },
  
  {
    path:"*", 
    element:<NotFound></NotFound>
  }])

  return (
   <>
   <Provider  store={Store}>
        <RouterProvider router={router}>
      </RouterProvider>
   </Provider>
   
   </>
  )
} 

export default App

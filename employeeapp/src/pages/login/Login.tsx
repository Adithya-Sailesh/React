import "./Login.css"
import "../../assets/kv-login.jpeg"
import "../../assets/kv-logo.png"
import Button from "../../components/button/Button"
import InputField from "../../components/inputField/InputField"
import { useEffect, useRef, useState } from "react"
import useMousePostion from "../../hooks/useMousePostion"
import { Navigate, useNavigate } from "react-router-dom"
const Login =()=>{ 
    const navigate=useNavigate()
    const mousePositon=useMousePostion();
    const[username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const usernameRef= useRef<HTMLInputElement>(null)
    const[usernameLength,setUserNamelength]=useState("")
    const isLoggedCheck=()=>{
                const islogged=localStorage.getItem("isLoggedIn")
                console.log("In side layout",islogged)
                return islogged=="true";
    }
    if(isLoggedCheck()) return <Navigate to="/employee"/>

    
    const updateUsername = (newUserName: string ) => {
        setUsername(newUserName)        
    }
    const handleLogin=(e:HTMLFormElement)=>{
         e.preventDefault();
         if(username===user.username && password===user.password ){
                localStorage.setItem("isLoggedIn","true")
                alert("Login Successfull")
                navigate("/employee");
         }
         else{
            alert("Wrong User Name or Password")
         }
        console.log("Button Clicked")
    }
    const updatePassword = (newpassword: string) => {
        setPassword(newpassword)
    }
    useEffect(()=>{
        usernameRef.current?.focus();
    },[])
    useEffect(()=>{
        console.log(username)   
        if(username.length==0){
            setUserNamelength("")
        }else if(username.length<5){
            setUserNamelength("Name Should Be more than 5 letters")
        }   
        // else if(username.length>10){
        //     setUserNamelength("Name Should be less than 10 letters")
        // }
        // else if(username.length<10){ 
        //     setUserNamelength("Valid")
        // }
    },[username])
    const user={username:"admin",password:"password"}
    return(
        <>
             <main>
                <div className="leftcontainer">
                    <img src="./src/assets/kv-login.jpeg" alt="Loign Page" />
                </div>
                <div className="rightcontainer">
                    <div className="rightcontainer-box">
                            <div className="rightcontainer-box1">
                                    <img src="./src/assets/kv-logo.png" alt="Circle image" />
                            </div>
                            <form onSubmit={handleLogin}>  
                                <InputField title="Username" type="text" value={username} onInputChange={updateUsername} ref={usernameRef} endAdd={<button   type="button" onClick={()=>setUsername("")}>Clear</button>}></InputField>
                                
                                <InputField title="Password" type="password" value={password} onInputChange={updatePassword} ></InputField>  
                                <div>
                                    <Button type="submit" label={"Login in"} ></Button>
                                </div>
                        
                                <p>{usernameLength}</p>
                                {/* {<p> X:{mousePositon.x} Y:{mousePositon.y}</p>} */} 
                            </form>
                    </div>
                </div>
            </main>
        </>
    )
}



export default Login
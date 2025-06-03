import "./Login.css"
import "../../assets/kv-login.jpeg"
import "../../assets/kv-logo.png"
import Button from "../../components/button/Button"
import InputField from "../../components/inputField/InputField"
import { useEffect, useRef, useState } from "react"
import useMousePostion from "../../hooks/useMousePostion"
import { Navigate, useNavigate } from "react-router-dom"
import useShowPassword from "../../hooks/useShowPassword"
import { useLoginMutation } from "../../api-service/auth/login.api"
const Login =()=>{ 
    const [login]=useLoginMutation();
    const navigate=useNavigate()
    const mousePositon=useMousePostion();
    const[username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const {toggleShowPassword,showPassword}=useShowPassword()
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
    const handleLogin=async(e)=>{
         e.preventDefault();
         setLoading(true)
         await login({email:username,password:password}).unwrap().then((res)=>{
                localStorage.setItem("token",res.accessToken)
                localStorage.setItem("isLoggedIn","true")
                navigate("/employee");
         }).catch((err)=>{
            alert(err.data.message)
         });
        setLoading(false)
    }
    const updatePassword = (newpassword: string) => {
        setPassword(newpassword)
    }
    useEffect(()=>{
        usernameRef.current?.focus();
    },[])
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
                                <InputField title="Username" type="text"  value={username} onInputChange={updateUsername} ref={usernameRef} endAdd={<button   type="button" onClick={()=>setUsername("")}>Clear</button>}></InputField>
                                <InputField  title="Password" type={showPassword ? "text" :"password"} value={password} onInputChange={updatePassword} ></InputField>  
                                <h3 style={{float:"right"}}><input type="checkbox" name="" id="" checked={showPassword} onChange={toggleShowPassword}/>Show Password</h3>
                                <div>
                                    <Button type="submit" label={loading ? "Loading " :"Login in"} ></Button>
                                </div>
                        
                                <p>{usernameLength}</p>
                            </form>
                    </div>
                </div>
            </main>
        </>
    )
}



export default Login
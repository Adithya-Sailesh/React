import "./Login.css";
import LoginInput from ".././../components/loginInput/LoginInput";
import { useRef, useEffect } from "react";
import kvLogo from "../../assets/kv-logo.png";
import kvLoginImg from "../../assets/kv-login.jpeg";
import Button from "../../components/button1/Button1";
import "./UncontrolledLogin.css"
import Button1 from "../../components/button1/Button1";
const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
const clearButtonRef=useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

  
// const handleNativeSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
//             event.preventDefault();
//             const form=event.currentTarget
//             const formdata=new FormData(form)
            
// }
const clearUsername=()=>{
    console.log("sfdfdsf")
    if(usernameRef.current){
        usernameRef.current.value=" ";
        if(clearButtonRef.current)clearButtonRef.current.disabled=true
    }   
}


const clearButton=(name:string)=>{
    console.log("in 0")
    if(!clearButtonRef.current){
        return
    }
    if(name.length>0  ){
        console.log("in 1")
        clearButtonRef.current.disabled=false
        clearButtonRef.current.onclick=clearUsername
    }
    else {
        console.log("in 2")
         clearButtonRef.current.disabled=true
         
    }
   
}


  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src={kvLoginImg} alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src={kvLogo} alt="KV Logo" />
          <form>
            <LoginInput
              id="login-username-input"
              label="Username"
              ref={usernameRef}
              
              onChange={(e)=>clearButton(e.target.value)}
              name="username"
                endAdornment ={
                // <Button1 type='button' onClick={clearUsername} disabled={true} ref={clearButtonRef}></Button1>
                <button type='button' onClick={clearUsername} disabled={true} ref={clearButtonRef}>clear</button>
              }
            />

            <LoginInput id="login-password-input" label="Password" name="password" />

            <Button type="submit" className="login-button" >
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;
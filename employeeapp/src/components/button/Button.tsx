import "./Button.css"
const Button =({label,type}:{label:string,type:"submit"|"reset"|"button"})=>{
    
    return(
        <div>
        <button type={type} className="Buttondesign" >{label}</button>
        </div>
    )
}


export default Button
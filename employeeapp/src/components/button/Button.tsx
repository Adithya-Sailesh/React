import "./Button.css"
const Button =({label,type}:{label:string,type:"submit"|"reset"|"button"})=>{
    
    return(
        <div>
        <button type={type} className="Buttondesign" aria-label={label} >{label}</button>
        </div>
    )
}


export default Button
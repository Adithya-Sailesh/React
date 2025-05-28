import "./Header.css"

const Header=({t,a,b}:{t: string,a:number,b:number})=>{
    return( 
        <h1>This is header {t}  {a*b}</h1>
    )
}


export default Header
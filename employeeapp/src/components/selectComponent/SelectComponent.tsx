import "./SelectComponent.css"
const SelectComponent=({labeltext,title,options,onChange}:{labeltext:string,title:string,options:string[],onChange?:any})=>{
    return(<>


    <label>{labeltext}</label>
        <select onChange={onChange}>
            <option value="" hidden>{title}</option>
            {options.map((obj)=>(
                <option key={obj}>{obj}</option>
            ))}
        </select>
    </>
        
    )
}

export default SelectComponent
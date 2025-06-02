import "./SelectComponent.css"
const SelectComponent=({labeltext,title,options,onChange,value}:{labeltext:string,title:string,options:string[],onChange?:any,value:string})=>{
    return(<>


    <label>{labeltext}</label>
        <select onChange={onChange} value={value}>
            <option value="" hidden>{title}</option>
            {options.map((obj,index)=>(
                <option key={index} value={obj  }>{obj}</option>
            ))}
        </select>
    </>
        
    )
}

export default SelectComponent
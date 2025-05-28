import "./SelectComponent.css"
const SelectComponent=({labeltext,title,options}:{labeltext:string,title:string,options:string[]})=>{
    return(<>


    <label>{labeltext}</label>
        <select>
            <option value="" hidden>{title}</option>
            {options.map((obj)=>(
                <option key={obj}>{obj}</option>
            ))}
        </select>
    </>
        
    )
}

export default SelectComponent
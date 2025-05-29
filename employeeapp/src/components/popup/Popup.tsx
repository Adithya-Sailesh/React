import './Popup.css'
const Popup=({msg,onConfirm,onCancel}:{msg:string,onConfirm:()=>void,onCancel:()=>void})=>{
    return(
        <div className='popupoverlay'>
            <div className="popuptab">
                <div className='msgsec1'>
                       <h1> {msg}</h1>
                </div>
                <div className="msgsec2">
                    <button onClick={onConfirm}>Confirm</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
    
}

export default Popup








import './Popup.css'
const Popup=({msg,msg2,onConfirm,onCancel}:{msg:string,msg2:string,onConfirm:()=>void,onCancel:()=>void})=>{
    return(
        <div className='popupoverlay'>
            <div className="popuptab">
                <div className='msgsec1'>
                       <h1> {msg}</h1>
                       <h4>{msg2}</h4>
                </div>
                <div className="msgsec2">
                    <button onClick={(e)=>{
                        onConfirm()
                        e.stopPropagation()}
                    }>Confirm</button>
                    <button onClick={(e)=>{
                        onCancel()
                        e.stopPropagation()
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    )
    
}

export default Popup








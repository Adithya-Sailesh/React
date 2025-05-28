import Button from "../button/Button"
import SelectComponent from "../selectComponent/SelectComponent"
import  "./createFormSection.css"


const CreateFormSection=()=>{
    return(
        <>
         <form>
                        <div className="formbox">
                            <div className="inputbox">
                                <label>Employee Name</label>
                                <input type="text" name="" id="" placeholder="Employee Name" />
                                {/* <InputField type="text" title="Employee Name"></InputField> */}
                            </div>
                            <div className="inputbox">
                                <label>Joining date</label>
                                <input type="date" name="" id="" placeholder="Joining date" />
                            </div>
                            <div className="inputbox">
                                <label>Experience</label>
                                <input type="text" name="" id="" placeholder="Years" />
                            </div>
                            <div className="inputbox">
                                <SelectComponent labeltext="Department" title="Choose Department" options={["Dept1","Dept2"]}></SelectComponent>
                            </div> 
                            <div className="inputbox">
                                <SelectComponent labeltext="Role" title="Choose Role" options={["DEV","HR","UI","UX"]}></SelectComponent>
                            </div>
                            <div className="inputbox">
                                <SelectComponent labeltext="Status" title="Choose Status" options={["ACTIVE","INACTIVE","PROBATION"]}></SelectComponent>
                            </div>
                            <div className="inputbox Addressbox">
                                <label>Address</label>
                                <input type="text" name="" id="" placeholder="Flat No. /House No"/>
                                <input type="text" name="" id="" placeholder="Address Line 1" />
                                <input type="text" name="" id="" placeholder="Address Line 2" />
                            </div>
                        </div>
                        <div style={{marginTop: "10px"}}>
                            <div className="form_button">
                                <Button type="submit" label="Submit" ></Button>
                                <Button type="reset" label="Cancel" ></Button>
                            </div>
                        </div>           
                    </form>
        </>
    )
}


export default CreateFormSection
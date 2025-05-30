import Store from "../store";
import { EMPLOYEE_ACTION_TYPES, type EmployeeAction,type EmployeeState } from "./employee.types";
const intialState:EmployeeState={
    employees:[]
    
}


const employeeReducer=(state=intialState,action:EmployeeAction)=>{
        switch(action.type){
            case EMPLOYEE_ACTION_TYPES.CREATE:
                console.log(state)
                return {
                    ...state,   
                    employees:[...state.employees,action.payload],
                    
                };
            case EMPLOYEE_ACTION_TYPES.UPDATE:
                return state;
            case EMPLOYEE_ACTION_TYPES.DELETE:
                return state;
            default:
                return state
        }
        
}

export default employeeReducer;
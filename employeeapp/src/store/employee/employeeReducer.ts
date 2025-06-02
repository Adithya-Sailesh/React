// import Store from "../store";
// import { EMPLOYEE_ACTION_TYPES, type EmployeeAction,type EmployeeState } from "./employee.types";
// const intialState:EmployeeState={
//     employees:[]
    
// }
// const employeeReducer=(state=intialState,action:EmployeeAction)=>{
//         switch(action.type){
//             case EMPLOYEE_ACTION_TYPES.CREATE:
//                 console.log(state)
//                 return {
//                     ...state,   
//                     employees:[...state.employees,action.payload],
//                 };
//             case EMPLOYEE_ACTION_TYPES.UPDATE:
//                 return  state;
//             case EMPLOYEE_ACTION_TYPES.DELETE:
//                 return state;
//             default:
//                 return state
//         }
        
// }

// export default employeeReducer;

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Employee, EmployeeState } from './employee.types';

const initialState: EmployeeState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
        console.log("payload",action.payload)
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer;
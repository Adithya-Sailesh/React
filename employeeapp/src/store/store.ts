// import { applyMiddleware, legacy_createStore as createStore } from 'redux';
// import employeeReducer from './employee/employeeReducer';
// import logger from "redux-logger";

// const Store = createStore(
//   employeeReducer,
//   undefined,
//   applyMiddleware(logger)
// );
// export default Store


import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employee/employeeReducer";
import departmentReducer from "./department/departmentReducer";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import baseApi from "../api-service/api";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    department: departmentReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
    middleware: (getDefaultMiddleware) => 
	    getDefaultMiddleware().concat(baseApi.middleware)
});
setupListeners(store.dispatch);
	
 
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import employeeReducer from './employee/employeeReducer';
import logger from "redux-logger";

const Store = createStore(
  employeeReducer,
  undefined,
  applyMiddleware(logger)
);
export default Store
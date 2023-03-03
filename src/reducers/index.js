import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import vehicles from "./vehicles";
import bookings from "./bookings";

export default combineReducers({ alert, auth, vehicles, bookings });

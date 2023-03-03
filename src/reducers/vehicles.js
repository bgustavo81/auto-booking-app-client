import {
    GET_VEHICLES,
    VEHICLE_ERROR,
    UPDATE_FAVORITE,
    DELETE_VEHICLE,
    ADD_VEHICLE,
    GET_VEHICLE
  } from "../actions/types";
  
  const initalState = {
    vehicles: [],
    vehicle: null,
    favorite: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initalState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_VEHICLES:
        return {
          ...state,
          vehicles: payload,
          loading: false
        };
      case GET_VEHICLE:
        return {
          ...state,
          vehicle: payload,
          loading: false
        };
      case VEHICLE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      case UPDATE_FAVORITE:
        return {
          ...state,
          favorite: payload,
          loading: false
        };
      case DELETE_VEHICLE:
        return {
          ...state,
          vehicles: state.vehicles.filter(vehicle => vehicle.vehicle_id !== payload),
          loading: false
        };
      case ADD_VEHICLE:
        return {
          ...state,
          vehicles: [payload, ...state.vehicles],
          loading: false
        };
      default:
        return state;
    }
}
  
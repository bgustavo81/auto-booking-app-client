import axios from "axios";
import {
  GET_BOOKING,
  GET_BOOKINGS,
  ADD_BOOKING,
  DELETE_BOOKING,
  BOOKING_ERROR
} from "./types"

//Get bookings by user id
export const getBookingsByUserId = () => async dispatch => {
    const response = await axios.get(`https://booking-app-arab.onrender.com/api/booking/personal-bookings`);
  
    dispatch({ type: GET_BOOKINGS, payload: response.data });
}

//Get booked listings by user id
export const getBookedListingsByUserId = () => async dispatch => {
    const response = await axios.get(`https://booking-app-arab.onrender.com/api/booking/booked-listings`);
  
    dispatch({ type: GET_BOOKINGS, payload: response.data });
}

//Get bookings
export const getBookingByBookingId = (booking_id) => async dispatch => {
    const response = await axios.get(`https://booking-app-arab.onrender.com/api/booking/${booking_id}`);
  
    dispatch({ type: GET_BOOKING, payload: response.data });
}

//Create booking
export const createBooking = (formData, booking_info) => async (dispatch, getState) => {
    const user = getState().auth.user.user_id;

    const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
    try {
    const response = await axios.post("https://booking-app-arab.onrender.com/api/booking", {...formData, ...user, booking_info}, config);
    dispatch({ type: ADD_BOOKING, payload: response.data });
    dispatch(setAlert("Booking created", "success"));
    } catch (err) {
    dispatch({
        type: BOOKING_ERROR,
        payload: "Booking could not be created"
    });
  };
};
  
//Delete a booking
export const deleteBooking = booking_id => async dispatch => {
    await axios.delete(`https://booking-app-arab.onrender.com/api/booking/${booking_id}`);
  
    dispatch({ type: DELETE_BOOKING, payload: booking_id });
    dispatch(setAlert("Booking has been deleted.", "success"));
};
  
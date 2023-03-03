import {
    GET_BOOKINGS,
    BOOKING_ERROR,
    GET_BOOKING,
    DELETE_BOOKING,
    ADD_BOOKING
} from "../actions/types";

const initialState = {
    bookings: [],
    booking: null,
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_BOOKINGS:
          return {
            ...state,
            bookings: payload,
            loading: false
          };
        case GET_BOOKING:
          return {
            ...state,
            booking: payload,
            loading: false
          };
        case BOOKING_ERROR:
          return {
            ...state,
            error: payload,
            loading: false
          };
        case DELETE_BOOKING:
          return {
            ...state,
            bookings: state.bookings.filter(booking => booking.booking_id !== payload),
            loading: false
          };
        case ADD_BOOKING:
          return {
            ...state,
            bookings: [payload, ...state.bookings],
            loading: false
          };
        default:
          return state;
      }
}
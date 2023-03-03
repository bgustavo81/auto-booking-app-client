import React, { Fragment, useEffect } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getBookingsByUserId } from "../../actions/booking";
import Spinner from "../layout/Spinner";
import BookingItem from "./BookingItem";

const Bookings = ({
    getBookingsByUserId,
    bookings: { bookings, loading }
}) => {
    useEffect(() => {
        getBookingsByUserId();
    },[getBookingsByUserId])
    return loading || !bookings ? (
        <Spinner />
    ) : (
        <Fragment>
            <h1 className="font-bold text-center text-red-500 text-4xl mt-8">My Bookings</h1>
            <div>
                {bookings.map(booking => {
                    return <BookingItem key={booking.booking_id} booking={booking} />
                })}
            </div>
        </Fragment>
    );
};

Bookings.propTypes = {
    getBookingsByUserId: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    bookings: state.bookings
});

export default connect(
    mapStateToProps,
    { getBookingsByUserId }
)(Bookings);
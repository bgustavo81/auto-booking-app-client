import React, { Fragment, useEffect } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getBookedListingsByUserId } from "../../actions/booking";
import Spinner from "../layout/Spinner";
import BookingItem from "./BookingItem";

const BookedListings = ({
    getBookedListingsByUserId,
    bookings: { bookings, loading}
}) => {
    useEffect(() => {
        getBookedListingsByUserId();
    },[getBookedListingsByUserId])
    return loading || !bookings ? (
        <Spinner />
    ) : (
        <Fragment>
            <h1 className="font-bold text-center text-red-500 text-4xl mt-8">Bookings to Fulfill</h1>
            <div>
                {bookings.map(booking => {
                    return <BookingItem key={booking.booking_id} booking={booking} />
                })}
            </div>
        </Fragment>
    );
};

BookedListings.propTypes = {
    getBookedListingsByUserId: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    bookings: state.bookings
});

export default connect(
    mapStateToProps,
    { getBookedListingsByUserId }
)(BookedListings);
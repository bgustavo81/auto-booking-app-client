import React, { Fragment, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { getBookingByBookingId } from "../../actions/booking";
import Spinner from "../layout/Spinner";

const BookingConfirmation = ({
    getBookingByBookingId,
    auth: { user },
    bookings: { booking, loading }
}) => {
    const navigate = useNavigate();
    const booking_id = useParams().booking_id;

    useEffect(() => {
        getBookingByBookingId(booking_id);
    }, [getBookingByBookingId]);

    let time;
    if (booking) {
        time = moment(booking.created_at).startOf('day').fromNow();
    } else {
        time = "";
    }

    return loading || !booking ? (
        <Spinner />
    ) : (
        <Fragment>
            <div className="w-1/2 p-2 xl:w-2/3 lg:w-auto lg:mx-2 mx-auto mt-8">
                {booking.vehicle_photo === "" ? (
                    <img 
                        src={"https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/placeholder.jpg"} 
                        alt={booking.vehicle_title} 
                        className="rounded-t-xl"
                    />
                ): (
                    <img 
                        src={"https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/" + booking.vehicle_photo} 
                        alt={booking.vehicle_title} 
                        className="rounded-t-xl"
                    />
                )}

                <div className="border shadow-md rounded-b-xl p-4">
                    <h1 className="text-green-500 font-bold text-lg text-center">Congratulations on your booking!</h1>
                    <p className="mb-2">You may review the reciept for your booking. The renter will get in contact with you regarding the booking.</p>
                    <h2 className="text-center text-2xl font-bold mb-4">{booking.vehicle_title}</h2>
                    <div className="flex justify-end relative -top-12">
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span >{booking.vehicle_location}</span>
                    <h3 className="text-lg font-bold underline mt-2">Description</h3>
                    <p>{booking.vehicle_description}</p>

                    <h3 className="text-lg font-bold underline mt-2">Perks</h3>
                    <span>{booking.vehicle_perks}</span>
                    <h3 className="text-lg font-bold underline mt-2">Pick up and drop off dates</h3>
                    <p>Pick up: {booking.check_in}</p>
                    <p>Drop off: {booking.check_out}</p>
                    <p className="mt-2">Payment confirmation of <span className="font-bold">${booking.price}</span></p>
                    <p className="mt-2">Rentee's email {booking.rentee_email}</p>
                    <p className="mt-2">Booking #{booking.booking_id}</p>
                    <p className="mt-2">If you do not hear from the owner in 24 hours, please contact them at {booking.renter_email}.</p>
                    <p className="mt-2">Booked {time}</p>
                    <div className="flex justify-between mt-4 px-2">
                        <Link to={`/bookings`}>
                            <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 hover:text-red-500">View My bookings</button>
                        </Link>

                    </div>
                </div>
            </div>        
        </Fragment>
    )
};

BookingConfirmation.propTypes = {
    getBookingByBookingId: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    bookings: state.bookings,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {getBookingByBookingId}
)(BookingConfirmation);
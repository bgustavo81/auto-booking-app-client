import React, { Fragment, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";
import { deleteVehicle } from "../../actions/vehicles";
import { connect } from "react-redux";

const VehicleItem = ({
    deleteVehicle,
    auth: {user},
    vehicle: {
        vehicle_id,
        title,
        location,
        photo,
        description,
        user_id,
        perks,
        minbooking,
        maxbooking,
        price,
        created_at
    }
}) => {
    
    const navigate = useNavigate();

    // const auth = user.user_id;
    const pathName = useLocation().pathname;
    const time = moment(created_at).startOf('day').fromNow();

    return (
        <Fragment>
            <div className="w-1/3 p-2 xl:w-1/2 lg:w-auto">
                {photo === "" ? (
                    <img 
                        src={"https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/placeholder.jpg"} 
                        alt={title} 
                        className="rounded-t-xl"
                    />
                ): (
                    <img 
                        src={"https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/" + photo} 
                        alt={title} 
                        className="rounded-t-xl"
                    />
                )}

                <div className="border shadow-md rounded-b-xl p-4">
                    <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span >{location}</span>
                    <h3 className="text-lg font-bold underline mt-2">Description</h3>
                    <p>{description}</p>

                    <h3 className="text-lg font-bold underline mt-2">Perks</h3>
                    <span>{perks}</span>
                    <h3 className="text-lg font-bold underline mt-2">Booking</h3>
                    <p>Minimum days to book: {minbooking}</p>
                    <p>Maximum days to book: {maxbooking}</p>
                    <p className="mt-2"><span className="font-bold">${price}</span>/day</p>
                    <p className="mt-2">{time}</p>
                    <div className="flex justify-between mt-4 px-2">
                    { user_id !== user.user_id ? (
                        <Link to={`/bookings/${vehicle_id}`}>
                            <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 hover:text-red-500">Book Now</button>
                        </Link>
                    ) : (
                        <button 
                        onClick={(e) => {
                            deleteVehicle(vehicle_id)
                            navigate('/vehicles/my-listings')
                        }}
                            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 hover:text-red-500"
                        >
                            Delete
                        </button>
                    )}  
                        <Link to={`/vehicles/${vehicle_id}`}>
                            <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 hover:text-red-500">Details</button>
                        </Link>
                    { user.user_id === user_id ? (
                        <Link to={`/vehicles/update/${vehicle_id}`}>
                            <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 hover:text-red-500">Manage Booking</button>
                        </Link>
                    ):(
                        <></>
                    )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

VehicleItem.propTypes = {
    deleteVehicle: PropTypes.func.isRequired,
    vehicle: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { deleteVehicle }
)(VehicleItem);
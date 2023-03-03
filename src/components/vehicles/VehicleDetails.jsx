import React, { Fragment, useEffect } from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { getVehicleById, deleteVehicle, toggleFavorite, getFavoriteByUserAndVehicle } from "../../actions/vehicles";
import Spinner from "../layout/Spinner";

const VehicleDetails = ({
    getFavoriteByUserAndVehicle,
    toggleFavorite,
    getVehicleById,
    deleteVehicle,
    auth: { user },
    vehicles: { vehicle, favorite, loading }
}) => {

    const navigate = useNavigate();
    const vehicle_id = useParams().vehicle_id;
    const pathName = useLocation().pathname;

    useEffect(() => {
        getFavoriteByUserAndVehicle(vehicle_id)
        getVehicleById(vehicle_id);
    }, [getFavoriteByUserAndVehicle, getVehicleById]);

    let time;
    if (vehicle) {
        time = moment(vehicle.created_at).startOf('day').fromNow();
    } else {
        time = "";
    }


    return loading || !vehicle || !favorite ? (
        <Spinner />
    ) : (
        <Fragment>
                <div className="w-1/2 p-2 xl:w-2/3 lg:w-auto lg:mx-2 mx-auto mt-8">
                {/* <img src={'https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/' + photo} alt={description} /> */}
                {vehicle.photo === "" ? (
                    <img 
                        src={"https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/placeholder.jpg"} 
                        alt={vehicle.title} 
                        className="rounded-t-xl"
                    />
                ): (
                    <img 
                        src={"https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/" + vehicle.photo} 
                        alt={vehicle.title} 
                        className="rounded-t-xl"
                    />
                )}

                <div className="border shadow-md rounded-b-xl p-4">
                    <h2 className="text-center text-2xl font-bold mb-4">{vehicle.title}</h2>
                    <div className="flex justify-end relative -top-12">
                    {favorite.favorite.favorite === 0 || favorite.favorite === "" ? (
                        <a  onClick={e => toggleFavorite(vehicle.vehicle_id)}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                strokeWidth={1.5} stroke="currentColor" 
                                className="w-8 h-8 cursor-pointer"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </a>
                    ) : (
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="red" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-8 h-8 cursor-pointer"
                            onClick={e => toggleFavorite(vehicle.vehicle_id)}
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    )}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span >{vehicle.location}</span>
                    <h3 className="text-lg font-bold underline mt-2">Description</h3>
                    <p>{vehicle.description}</p>

                    <h3 className="text-lg font-bold underline mt-2">Perks</h3>
                    <span>{vehicle.perks}</span>
                    <h3 className="text-lg font-bold underline mt-2">Booking</h3>
                    <p>Minimum days to book: {vehicle.minbooking}</p>
                    <p>Maximum days to book: {vehicle.maxbooking}</p>
                    <p className="mt-2"><span className="font-bold">${vehicle.price}</span>/day</p>
                    <p className="mt-2">{time}</p>
                    <div className="flex justify-between mt-4 px-2">
                    { pathName !== "/vehicles/my-listings" && user.user_id !== vehicle.user_id ? (
                        <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 hover:text-red-500">Book Now</button>
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
                    <button onClick={() => navigate(-1)} className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 hover:text-red-500">Back</button>
                    { user.user_id === vehicle.user_id ? (
                        <Link to={`/vehicles/update/${vehicle.vehicle_id}`}>
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
}

VehicleDetails.propTypes = {
    getVehicleById: PropTypes.func.isRequired,
    deleteVehicle: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    getFavoriteByUserAndVehicle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    vehicles: state.vehicles,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { getVehicleById, deleteVehicle, toggleFavorite, getFavoriteByUserAndVehicle }
)(VehicleDetails);
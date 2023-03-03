import React, { Fragment, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Datepicker from "react-tailwindcss-datepicker";
import { getVehicleById } from "../../actions/vehicles";
import Spinner from "../layout/Spinner";
import Payments from "./Payments";

const CreateBooking = ({
    getVehicleById,
    auth,
    vehicles: { vehicle, loading}
}) => {
    const navigate = useNavigate();
    const vehicle_id = useParams().vehicle_id;
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    useEffect(() => {
        getVehicleById(vehicle_id);
    }, [getVehicleById]);

    const handleValueChange = (newValue) => {
        setValue(newValue); 
        } 

    return loading || !vehicle || !auth ? (
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
                    <div className="w-1/2 mt-2">
                    <small className="underline pl-2">Pick up and drop off date</small>
                    <Datepicker 
                        useRange={false} 
                        value={value} 
                        onChange={handleValueChange} 
                    /> 
                    </div>
                    <p>
                        Please read the <span className="font-bold text-blue-500">Terms and Conditions</span>.
                        Your order <span className="font-bold">requires a first day deposit</span>. The rental owner will contact you for further details 
                        regarding pick up, drop off, and completion of payment. 
                    </p>
                    <p className="text-red-500 font-bold">Stripe is in test mode. Please input 4242424242424242, a future expire day and any three numbers for security.</p>
                    <div className="flex justify-between mt-4 px-2">
                    <Payments price={vehicle.price} value={value} />
                    <button onClick={() => navigate(-1)} className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 hover:text-red-500">Back</button>
                    { auth.user.user_id === vehicle.user_id ? (
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
    );
};

CreateBooking.prototype = {
    getVehicleById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    vehicles: state.vehicles,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { getVehicleById }
)(CreateBooking);
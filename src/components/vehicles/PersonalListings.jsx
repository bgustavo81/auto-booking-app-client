import React, { Fragment, useEffect } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getVehiclesByUserId } from "../../actions/vehicles";
import Spinner from "../layout/Spinner";
import VehicleItem from "./VehicleItem";

const PersonalListings = ({
    getVehiclesByUserId,
    auth: { user },
    vehicles: { vehicles, loading }

}) => {
    useEffect(() => {
        getVehiclesByUserId();
    },[getVehiclesByUserId]);

    return loading || !vehicles ? (
        <Spinner />
    ) : (  
        <Fragment>
            <h1 className="font-bold text-center text-red-500 text-4xl mt-8">Personal Listings</h1>
            <div className="flex flex-wrap p-8">
                {vehicles.map(vehicle => {
                    return <VehicleItem key={vehicle.vehicle_id} vehicle={vehicle} auth={user} />
                })}
            </div>
        </Fragment>
    );
};

PersonalListings.propTypes = {
    getVehiclesByUserId: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    vehicles: state.vehicles,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { getVehiclesByUserId }
)(PersonalListings);
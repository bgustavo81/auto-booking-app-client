import React, {Fragment, useEffect} from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getVehicles } from "../../actions/vehicles";
import { loadUser } from "../../actions/auth";
import Spinner from "../layout/Spinner";
import VehicleItem from "./VehicleItem";


const Vehicles = ({
    getVehicles,
    loadUser,
    auth: {user},
    vehicles: {vehicles, loading}
}) => {
    useEffect(() => {
        loadUser();
        getVehicles();
    }, [getVehicles, loadUser]);


    return loading || !vehicles || !user ? (
        <Spinner />
    ) : (
        <Fragment>
            <h1 className="font-bold text-center text-red-500 text-4xl mt-8">Rent a car today</h1>
            <div className="flex flex-wrap p-8">
                {vehicles.map(vehicle => {
                    return <VehicleItem key={vehicle.vehicle_id} vehicle={vehicle} auth={user} />
                })}
            </div>
        </Fragment>
    )
}

Vehicles.propTypes = {
    getVehicles: PropTypes.func.isRequired,
    vehicles: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    vehicles: state.vehicles,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { getVehicles, loadUser } 
)(Vehicles);


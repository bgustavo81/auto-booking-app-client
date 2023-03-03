import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addVehicle } from "../../actions/vehicles";

const CreateVehicle = ({ addVehicle }) => {
    const [formData, setFormData] = useState({
        title:"",
        location:"",
        photo:"",
        description:"",
        perks:"",
        minBooking:"",
        maxBooking:"",
        price:""
    });

    let navigate = useNavigate();

    const { title, location, photo, description, perks, minBooking, maxBooking, price } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onChangeImage = e => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0]})
    }

    const onSubmit = e => {
        e.preventDefault();
        addVehicle(formData);
        navigate('/vehicles/my-listings')
      };

    return (
        <Fragment>
            <h1 className="font-bold text-center text-red-500 text-4xl md:text-2xl mt-8 mb-6">Create a new listing</h1>
            <form
                className="mx-auto w-1/3 lg:w-1/2 md:w-2/3 text-center"
                onSubmit={e => onSubmit(e)}
            >
                <div>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={e => onChange(e)}
                    required
                />
                </div>
                <div>
                <input
                    type="text"
                    placeholder="Vehicle's location (e.i. Atlanta, GA)"
                    name="location"
                    value={location}
                    onChange={e => onChange(e)}
                    required
                />
                </div>
                <div>
                <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Vehicle Description"
                    value={description}
                    onChange={e => onChange(e)}></textarea>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Perks of renting your vehicle"
                        name="perks"
                        value={perks}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>                
                <div>
                    <input
                        type="text"
                        placeholder="Minimum days for rental (e.i. 2 Days)"
                        name="minBooking"
                        value={minBooking}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Maximum days for rental (e.i. 5 days)"
                        name="maxBooking"
                        value={maxBooking}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        min="0"
                        step="1"
                        placeholder="Price per day (whole number)"
                        name="price"
                        value={price}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="my-4">
                <small>Include a photo of the vehicle</small>
                <br />
                    <input
                        className="mt-2"
                        name="photo"
                        type='file'
                        accept='.jpg, .png, .jpeg'
                        onChange={e => onChangeImage(e)}
                    />
                </div>
                <input type="submit" className="inline-flex  justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 w-20 hover:text-red-500" />
                <Link className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 w-20 ml-2 hover:text-red-500" to="/vehicles">
                    Cancel
                </Link>
            </form>
        </Fragment>
    )
}

CreateVehicle.propTypes = {
    addVehicle: PropTypes.func.isRequired
};
  
export default connect(
    null,
    { addVehicle }
)(CreateVehicle);
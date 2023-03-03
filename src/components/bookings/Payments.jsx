import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Payments = ({
    price,
    value: { startDate, endDate}
}) => {
    let navigate = useNavigate();

    const vehicle_id = parseInt(useParams().vehicle_id);
    const onToken = async token => {
        const response = await axios.post("http://localhost:5000/api/booking/billing", {token, vehicle_id, price, startDate, endDate});
        navigate(`/booking/confirmation/${vehicle_id}`);
        // dispatch({ type: USER_LOADED, payload: response.data });
    };

    return (
        <StripeCheckout
            name="booking app"
            description="payment for rental"
            amount={price * 100}    
            stripeKey="pk_test_gG5b0dBHoou9aCC9EfQVv7FV"
            token={onToken}
        >
            <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 hover:text-red-500">Pay & Booking</button>
        </StripeCheckout>
    );
};

export default (Payments);
// export default Payments;
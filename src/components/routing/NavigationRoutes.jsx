import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
// import Dashboard from "../dashboard/Dashboard";
// import PrivateRoute from "../routing/PrivateRoute";
// import CreateProfile from "../profile-forms/CreateProfile";
// import EditProfile from "../profile-forms/EditProfile";
// import AddExperience from "../profile-forms/AddExperience";
// import AddEducation from "../profile-forms/AddEducation";
// import Posts from "../posts/Posts";
// import Post from "../post/Post";
// import Profiles from "../profiles/Profiles";
import NotFound from "../layout/NotFound";
import Vehicles from "../vehicles/Vehicles";
import CreateVehicle from "../vehicles/CreateVehicle";
import PersonalListings from "../vehicles/PersonalListings";
import UpdateVehicle from "../vehicles/UpdateVehicle";
import VehicleDetails from "../vehicles/VehicleDetails";
import FavoriteListings from "../vehicles/FavoriteListings";
import CreateBooking from "../bookings/CreateBooking";
import BookingConfirmation from "../bookings/BookingConfirmation";
import Bookings from "../bookings/Bookings";
import BookedListings from "../bookings/BookedListings";
// import Profile from "../profile/Profile";

export const NavigationRoutes = () => {
  return (
    <section className="">
      <Alert />
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/vehicles" element={<Vehicles />} />
        <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/vehicles/new' element={<CreateVehicle/>}/>
            <Route exact path='/vehicles/my-listings' element={<PersonalListings />} />
            <Route exact path='/vehicles/favorites' element={<FavoriteListings />} />
            <Route exact path='/vehicles/update/:vehicle_id' element={<UpdateVehicle />} />
            <Route exact path='/vehicles/:vehicle_id' element={<VehicleDetails />} />

            <Route exact path='/bookings/:vehicle_id' element={<CreateBooking />} />
            <Route exact path='/booking/confirmation/:booking_id' element={<BookingConfirmation />} />
            <Route exact path='/bookings' element={<Bookings />} />
            <Route exact path='/bookings/fulfillment' element={<BookedListings />} />
        </Route>

        <Route element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default NavigationRoutes;
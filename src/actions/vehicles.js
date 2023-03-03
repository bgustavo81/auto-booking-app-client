import axios from "axios";
import { setAlert } from "./alert";
import { ADD_VEHICLE, DELETE_VEHICLE, GET_VEHICLE, GET_VEHICLES, VEHICLE_ERROR, UPDATE_FAVORITE } from "./types";


//Vehicle actions
//Get vehicles
export const getVehicles = () => async dispatch => {
    const response = await axios.get("https://booking-app-arab.onrender.com/api/vehicle");
  
    dispatch({ type: GET_VEHICLES, payload: response.data });
  }

//Get vehicles by user id
export const getVehiclesByUserId = () => async dispatch => {
  const response = await axios.get("https://booking-app-arab.onrender.com/api/vehicle/personal-listings");

  dispatch({ type: GET_VEHICLES, payload: response.data });
}


//Delete a post
export const deleteVehicle = vehicle_id => async dispatch => {
  await axios.delete(`https://booking-app-arab.onrender.com/api/vehicle/${vehicle_id}`);

  dispatch({ type: DELETE_VEHICLE, payload: vehicle_id });
  dispatch(setAlert("Vehicle has been deleted.", "success"));
};


//Add a post
export const addVehicle = formData => async (dispatch, getState) => {
  const user = getState().auth.user.user_id;
  // image upload to S3
  if (formData.photo) {
    const uploadConfig = await axios.get("https://booking-app-arab.onrender.com/api/upload");
    axios.put(uploadConfig.data.url, formData.photo, {
      headers: {
        'Content-Type': formData.photo.type
      }
    });
    formData.photo = uploadConfig.data.key;
  }

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const response = await axios.post("https://booking-app-arab.onrender.com/api/vehicle/", {...formData, ...user}, config);
    // dispatch({ type: ADD_VEHICLE, payload: response.data });
    dispatch(setAlert("Listing created", "success"));
  } catch (err) {
    dispatch(setAlert("Listing could not be created"));
    dispatch({
      type: VEHICLE_ERROR,
      payload: "Listing could not be created"
    });
  }
};

//Add a post
export const updateVehicle = (formData, vehicle_id) => async (dispatch, getState) => {
  const user = getState().auth.user.user_id;
  formData.vehicle_id = parseInt(vehicle_id);
  formData.user_id = user;
  // image upload to S3
  if (formData.photo) {
    const uploadConfig = await axios.get("https://booking-app-arab.onrender.com/api/upload");
    axios.put(uploadConfig.data.url, formData.photo, {
      headers: {
        'Content-Type': formData.photo.type
      }
    });
    formData.photo = uploadConfig.data.key;
  }
  
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const response = await axios.patch(`https://booking-app-arab.onrender.com/api/vehicle/${formData.vehicle_id}`, {...formData, ...user}, config);
    dispatch({ type: ADD_VEHICLE, payload: response.data });
    dispatch(setAlert("Listing updated", "success"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: VEHICLE_ERROR,
      payload: "Listing could not be created"
    });
  }
};


  //Get post
export const getVehicleById = vehicle_id => async dispatch => {
  const response = await axios.get(`https://booking-app-arab.onrender.com/api/vehicle/${vehicle_id}`);

  dispatch({ type: GET_VEHICLE, payload: response.data });
}

//Get post
export const getVehiclesByFavorited = () => async dispatch => {
  const response = await axios.get('https://booking-app-arab.onrender.com/api/vehicle/favorites/my-favorites');
  dispatch({ type: GET_VEHICLES, payload: response.data });
}

export const getFavoriteByUserAndVehicle = (vehicle_id) => async dispatch => {
  vehicle_id = parseInt(vehicle_id);
  const response = await axios.get(`https://booking-app-arab.onrender.com/api/vehicle/favorite/${vehicle_id}`);
  dispatch({ type: UPDATE_FAVORITE, payload: {favorite: response.data}})
}

// Toggle favorite listings
export const toggleFavorite = vehicle_id => async dispatch => {
  const response = await axios.patch(`https://booking-app-arab.onrender.com/api/vehicle/favorite/${vehicle_id}`);
  dispatch({ type: UPDATE_FAVORITE, payload: {favorite: response.data }});
  dispatch(setAlert("Favorite list updated", "success"));
};


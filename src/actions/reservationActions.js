import {
    RESERVATION_LIST_REQUEST, RESERVATION_LIST_SUCCESS, RESERVATION_LIST_FAIL,
    RESERVATION_DETAILS_REQUEST, RESERVATION_DETAILS_SUCCESS, RESERVATION_DETAILS_FAIL, RESERVATION_SAVE_REQUEST, RESERVATION_SAVE_SUCCESS, RESERVATION_SAVE_FAIL, RESERVATION_DELETE_SUCCESS, RESERVATION_DELETE_FAIL, RESERVATION_DELETE_REQUEST, RESERVATION_UPDATE_REQUEST, RESERVATION_UPDATE_SUCCESS, RESERVATION_UPDATE_FAIL
  } from "../constants/reservationConstants"
  import axios from 'axios';
  import Axios from "axios";
  import Cookie from 'js-cookie';

  // const listPuppies = (category = '', searchKeyword = '', sortOrder = '') => async (dispatch) => {
  //   try {
  
  //     dispatch({ type: PUPPY_LIST_REQUEST });
  //     const { data } = await axios.get("/api/puppies?category=" + category +
  //       "&searchKeyword=" + searchKeyword + "&sortOrder=" + sortOrder);
  //     dispatch({ type: PUPPY_LIST_SUCCESS, payload: data });
  //   }
  //   catch (error) {
  
  //     dispatch({ type: PUPPY_LIST_FAIL, payload: error.message });
  //   }
  // }

  const updateReservation = ({ reservationId, clientName, clientLocation, gender, litter, litterETA, reserved }) => async (dispatch, getState) => {
    const { reservationid: { reservation } } = getState();
    dispatch({ type: RESERVATION_UPDATE_REQUEST, payload: { reservationId, clientName, clientLocation, gender, litter, litterETA, reserved } });
    try {
      const { data } = await Axios.put("/api/reservations/" + reservationId,
        { reservationId, clientName, clientLocation, gender, litter, litterETA, reserved }, {
        headers: {
          Authorization: 'Bearer ' + reservation.token
        }
      });
      dispatch({ type: RESERVATION_UPDATE_SUCCESS, payload: data });
      Cookie.set('reservation', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: RESERVATION_UPDATE_FAIL, payload: error.message });
    }
  }

  const listReservations = () => async (dispatch) => {
    try {
        dispatch({ type: RESERVATION_LIST_REQUEST });
        const { data } = await axios.get('/api/reservations');
        dispatch({ type: RESERVATION_LIST_SUCCESS, payload: data});
    }
    catch (error) {
        dispatch({ type: RESERVATION_LIST_FAIL, payload: error.message });
        }
    }
    
  const saveReservation = (reservation) => async (dispatch, getState) => {
    try {
      dispatch({ type: RESERVATION_SAVE_REQUEST, payload: reservation });
      const { userSignin: { userInfo } } = getState();
      if (!reservation._id) {
        const { data } = await Axios.post('/api/reservations', reservation, {
          headers: {
            'Authorization': 'Bearer ' + userInfo.token
          }
        });
        dispatch({ type: RESERVATION_SAVE_SUCCESS, payload: data });
      } else {
        const { data } = await Axios.put('/api/reservations/' + reservation._id, reservation, {
          headers: {
            'Authorization': 'Bearer ' + userInfo.token
          }
        });
        dispatch({ type: RESERVATION_SAVE_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: RESERVATION_SAVE_FAIL, payload: error.message });
    }
  }
  
  const detailsReservation = (reservationId) => async (dispatch) => {
    try {
      dispatch({ type: RESERVATION_DETAILS_REQUEST, payload: reservationId });
      const { data } = await axios.get("/api/reservations/" + reservationId);
      dispatch({ type: RESERVATION_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: RESERVATION_DETAILS_FAIL, payload: error.message });
    }
  }
  
  const deleteReservation = (reservationId) => async (dispatch, getState) => {
    try {
      const { userSignin: { userInfo } } = getState();
      dispatch({ type: RESERVATION_DELETE_REQUEST, payload: reservationId });
      const { data } = await axios.delete("/api/reservations/" + reservationId, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token
        }
      });
      dispatch({ type: RESERVATION_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
      dispatch({ type: RESERVATION_DELETE_FAIL, payload: error.message });
    }
  }
  
  export { listReservations, detailsReservation, saveReservation, deleteReservation, updateReservation }


// import { RESERVATION_LIST_REQUEST, RESERVATION_LIST_SUCCESS, RESERVATION_LIST_FAIL } from '../constants/reservationConstants';
// import axios from 'axios';

// const listReservations = () => async (dispatch) => {
// try {
//     dispatch({ type: RESERVATION_LIST_REQUEST });
//     const { data } = await axios.get('/api/reservations');
//     dispatch({ type: RESERVATION_LIST_SUCCESS, payload: data});

// }
// catch (error) {

//     dispatch({ type: RESERVATION_LIST_FAIL, payload: error.message });
//     }
// }

// export { listReservations };
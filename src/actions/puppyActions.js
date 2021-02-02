import {
    PUPPY_LIST_REQUEST, PUPPY_LIST_SUCCESS, PUPPY_LIST_FAIL,
    PUPPY_DETAILS_REQUEST, PUPPY_DETAILS_SUCCESS, PUPPY_DETAILS_FAIL, PUPPY_SAVE_REQUEST, PUPPY_SAVE_SUCCESS, PUPPY_SAVE_FAIL, PUPPY_DELETE_SUCCESS, PUPPY_DELETE_FAIL, PUPPY_DELETE_REQUEST, PUPPY_UPDATE_REQUEST, PUPPY_UPDATE_SUCCESS, PUPPY_UPDATE_FAIL
  } from "../constants/puppyConstants"
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
  const updatePuppy = ({ puppyId, puppyName, dob, rank, color, birthWeight, birthTime, momsName, dadsName, icon, video, gender, slideimage1, discription, price }) => async (dispatch, getState) => {
    const { userSignin: { userInfo } } = getState();
    dispatch({ type: PUPPY_UPDATE_REQUEST, payload: { puppyId, puppyName, dob, rank, color, birthWeight, birthTime, momsName, dadsName, icon, video, gender, slideimage1, discription, price  } });
    try {
      const { data } = await Axios.put("/api/puppies/" + puppyId,
        { puppyName, dob, rank, color, birthWeight, birthTime, momsName, dadsName, icon, video, gender, slideimage1, discription, price  }, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token
        }
      });

      dispatch({ type: PUPPY_UPDATE_SUCCESS, payload: data });
      Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: PUPPY_UPDATE_FAIL, payload: error.message });
    }
  }
  const listPuppies = () => async (dispatch) => {
    try {
        dispatch({ type: PUPPY_LIST_REQUEST });
        const { data } = await axios.get('/api/puppies/');
        dispatch({ type: PUPPY_LIST_SUCCESS, payload: data});
    }
    catch (error) {
        dispatch({ type: PUPPY_LIST_FAIL, payload: error.message });
        }
    }
    
  const savePuppy = (puppy) => async (dispatch, getState) => {
    try {
      dispatch({ type: PUPPY_SAVE_REQUEST, payload: puppy });
      const { userSignin: { userInfo } } = getState();
      if (!puppy._id) {
        const { data } = await Axios.post('/api/puppies', puppy, {
          headers: {
            'Authorization': 'Bearer ' + userInfo.token
          }
        });
        dispatch({ type: PUPPY_SAVE_SUCCESS, payload: data });
      } else {
        const { data } = await Axios.put('/api/puppies/' + puppy._id, puppy, {
          headers: {
            'Authorization': 'Bearer ' + userInfo.token
          }
        });
        dispatch({ type: PUPPY_SAVE_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: PUPPY_SAVE_FAIL, payload: error.message });
    }
  }
  
  const detailsPuppy = (puppyId) => async (dispatch) => {
    try {
      dispatch({ type: PUPPY_DETAILS_REQUEST, payload: puppyId });
      const { data } = await axios.get("/api/puppies/" + puppyId);
      dispatch({ type: PUPPY_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PUPPY_DETAILS_FAIL, payload: error.message });
    }
  }
  
  const deletePuppy = (puppyId) => async (dispatch, getState) => {
    try {
      const { userSignin: { userInfo } } = getState();
      dispatch({ type: PUPPY_DELETE_REQUEST, payload: puppyId });
      const { data } = await axios.delete("/api/puppies/" + puppyId, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token
        }
      });
      dispatch({ type: PUPPY_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
      dispatch({ type: PUPPY_DELETE_FAIL, payload: error.message });
    }
  }
  
  export { listPuppies, detailsPuppy, savePuppy, deletePuppy, updatePuppy }
import { RESERVATION_LIST_REQUEST, RESERVATION_LIST_SUCCESS, RESERVATION_LIST_FAIL, RESERVATION_DETAILS_REQUEST, RESERVATION_DETAILS_SUCCESS, RESERVATION_DETAILS_FAIL, RESERVATION_SAVE_REQUEST, RESERVATION_SAVE_SUCCESS, RESERVATION_SAVE_FAIL, RESERVATION_DELETE_REQUEST, RESERVATION_DELETE_SUCCESS, RESERVATION_DELETE_FAIL, RESERVATION_UPDATE_REQUEST, RESERVATION_UPDATE_SUCCESS, RESERVATION_UPDATE_FAIL } from "../constants/reservationConstants";

const reservationListReducer = (state = { reservations: [] }, action) => {

  switch (action.type) {
    case RESERVATION_LIST_REQUEST:
      return { loading: true, reservation: [] };
    case RESERVATION_LIST_SUCCESS:
      return { loading: false, reservations: action.payload };
    case RESERVATION_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}
const reservationUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case RESERVATION_UPDATE_REQUEST:
        return { loading: true };
      case RESERVATION_UPDATE_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case RESERVATION_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }

const reservationDetailsReducer = (state = { reservation: {} }, action) => {

  switch (action.type) {
    case RESERVATION_DETAILS_REQUEST:
      return { loading: true };
    case RESERVATION_DETAILS_SUCCESS:
      return { loading: false, reservation: action.payload };
    case RESERVATION_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

const reservationDeleteReducer = (state = { reservation: {} }, action) => {

  switch (action.type) {
    case RESERVATION_DELETE_REQUEST:
      return { loading: true };
    case RESERVATION_DELETE_SUCCESS:
      return { loading: false, reservation: action.payload, success: true };
    case RESERVATION_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

const reservationSaveReducer = (state = { reservation: {} }, action) => {

  switch (action.type) {
    case RESERVATION_SAVE_REQUEST:
      return { loading: true };
    case RESERVATION_SAVE_SUCCESS:
      return { loading: false, success: true, reservation: action.payload };
    case RESERVATION_SAVE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

export { reservationListReducer, reservationDetailsReducer, reservationSaveReducer, reservationDeleteReducer, reservationUpdateReducer }
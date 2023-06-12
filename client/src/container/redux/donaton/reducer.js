import * as actionType from "./constant";

const DONATION_GET_INITIAL_STATE = {
  getDonationData: [],
  loading: false,
};

const getDonationReducer = (state = DONATION_GET_INITIAL_STATE, action) => {
    console.log(action,'reducer lll---')
  switch (action.type) {
    case actionType.DONATION_LOADING:
      return {
        getDonationData: state.getDonationData,
        loading: true,
      };
    case actionType.DONATION_SUCCESS:
      return {
        getDonationData: action.payload,
        loading: false,
      };
    case actionType.DONATION_ERROR:
      return {
        getDonationData: action.payload,
        loading: false,
      };
    case actionType.DONATION_RESET:
      return DONATION_GET_INITIAL_STATE
    default:
      return state;
  }
};

export { getDonationReducer };

import {
  GET_SMURF,
  GET_SMURF_FAIL,
  GET_SMURF_SUCCESS,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_ERROR,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILED,
  EDIT_SMURF,
  EDIT_SMURF_FAILED,
  EDIT_SMURF_SUCCESS
} from "../actions";
/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //get smurfs start
    case GET_SMURF:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ""
      };
    case GET_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: ""
      };
    case GET_SMURF_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    //get smurfs end

    //add smurfs start
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: true,
        error: ""
      };
    case ADD_SMURF_SUCCESS:
      console.log(action.payload);

      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      };
    case ADD_SMURF_ERROR:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    //add smurfs end

    // delete smurfs start
    case DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: true,
        error: ""
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurf: false
      };
    case DELETE_SMURF_FAILED:
      return { deletingSmurf: false, error: action.payload };

    case EDIT_SMURF:
      return {
        ...state,
        updatingSmurf: true,
        error: ""
      };
    case EDIT_SMURF_SUCCESS:
     
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload),
        updatingSmurf: false
      };
    case EDIT_SMURF_FAILED:
      return { updatingSmurf: false, error: action.payload };
    default:
      return state;
  }
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default reducer;

import { axiosWithAuth } from "../components/utils/smurfdate";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = " ADD_SMURF_SUCCESS";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";
export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axiosWithAuth()
    .post("/smurfs", smurf)
    .then(res => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_SMURF_ERROR, payload: err }));
};

export const GET_SMURF = "GET_SMURF";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCES";
export const GET_SMURF_FAIL = "GET_SMURF_FAIL";
export const getSmurf = () => dispatch => {
  dispatch({ type: GET_SMURF });
  axiosWithAuth()
    .get("/smurfs")
    .then(res => dispatch({ type: GET_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_SMURF_FAIL, payload: err.data }));
};

export const DELETE_SMURF = " DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = " DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILED = " DELETE_SMURF_FAILED";
export const deleteSmurfs = id => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axiosWithAuth()
    .delete(`/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
    .catch(err => {
      dispatch({ type: DELETE_SMURF_FAILED, payload: err.data });
    });
};





export const EDIT_SMURF = " EDIT_SMURF";
export const EDIT_SMURF_SUCCESS = " EDIT_SMURF_SUCCESS";
export const EDIT_SMURF_FAILED = " EDIT_SMURF_FAILED";
export const editSmurfs = smurf => dispatch => {
  dispatch({ type: EDIT_SMURF });
  axiosWithAuth()
    .put(`/smurfs/${smurf.id}`,smurf)
    .then(res => dispatch({ type: EDIT_SMURF_SUCCESS, payload: smurf }))
    .catch(err => {
      dispatch({ type: EDIT_SMURF_FAILED, payload: err.data });
    });
};



/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

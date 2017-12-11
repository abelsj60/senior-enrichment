import axios from 'axios';

// ACTION TYPE

const GET_CAMPUS = 'GET_CAMPUS';

// ACTION CREATOR

function getCampus(campus) {
  // console.log('campus actionCreator:', campus);
  const action = {
    type: GET_CAMPUS,
    campus: campus
  };
  return action;
}

// THUNK CREATORS

export function fetchCampus(campusId) {
  return function thunk (dispatch) {
    console.log('running thunk');
    return axios.get(`/api/campus/${campusId}`)
      .then(res => res.data)
      .then(campus => {
        console.log('dispatching to store');
        dispatch(getCampus(campus));
      });
  };
}

// REDUCER

export default function reducer (state = {}, action) {
  switch (action.type) {
    case GET_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}

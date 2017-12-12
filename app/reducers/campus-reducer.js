import axios from 'axios';

// ACTION TYPE

const GET_CAMPUSES = 'GET_CAMPUSES';

// ACTION CREATOR

function getCampuses(campuses) {
  const action = {
    type: GET_CAMPUSES,
    campuses: campuses
  };
  return action;
}

// THUNK CREATORS

export function fetchCampuses () {
  return function thunk (dispatch) {
    console.log('running thunk');
    return axios.get('/api/campus')
      .then(res => res.data)
      .then(campuses => {
        // console.log('----> campuses', campuses);
        console.log('dispatching fetchCampusesThunk to store');
        dispatch(getCampuses(campuses));
      })
      // .catch(err);
  };
}

// REDUCER

export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
}

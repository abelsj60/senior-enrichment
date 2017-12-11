/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import campuses from './campus-reducer';
import campus from './one-campus-reducer';
import students from './student-reducer';
import student from './one-student-reducer';

const reducer = combineReducers({
  campuses: campuses,
  campus: campus,
  students: students,
  student: student
});

export default reducer;

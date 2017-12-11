import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampus } from '../reducers/one-campus-reducer';
import SingleCampus from './SingleCampus';

class SingleCampusLoader extends Component {

  componentDidMount() {
    console.log('invoking thunk');
    this.props.getCampus(this.props.match.params.id);
  }

  render(){
    return (
      <div>
        <SingleCampus campus={this.props.campus} students={this.props.students} />
      </div>
    );
  }

}

function mapStateToProps(state) {
  console.log('checking on students in SCL:', state);
  return {
    campus: state.campus,
    students: state.students
  };
}

function mapDispatchToProps(dispatch) {
  console.log('calling thunk');
  return {
    getCampus: (id) => {
      dispatch(fetchCampus(id));
    }
  };
}

const SingleCampusLoaderContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampusLoader);

export default SingleCampusLoaderContainer;

// <h1>Interstellar Campus!</h1>
//   {this.props.campuses.length > 0 && (
//     <div>
//       <p>{this.props.campuses[0].name}</p>
//       <p>{this.props.campuses[0].description}</p>
//       <img src={this.props.campuses[0].imageUrl} />
//     </div>
//   )}

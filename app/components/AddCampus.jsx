import React, { Component } from 'react';
import { fetchCampuses } from '../reducers/campus-reducer';
import { connect } from 'react-redux';
import axios from 'axios';

class AddCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      imageUrl: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const enteredValue = {
      [event.target.name]: event.target.value
    };
    console.log('enteredValue:', enteredValue);
    this.setState(enteredValue);
  }

  handleSubmit (event) {
    event.preventDefault();
    let tempCampusState = Object.assign({}, this.state);
    if (tempCampusState.imageUrl === '') {
      delete tempCampusState.imageUrl;
    }
    axios.post('/api/campus/', tempCampusState)
      .then( () => {
        this.setState({
          name: '',
          description: '',
          imageUrl: ''
        });
      })
      .then(() => {
        console.log('invoking thunk');
        this.props.getCampuses();
        this.props.history.push('/campus');
      });
    //withRouter: this.props.match.params.(:id)
  }

  render () {

    return (
      <div>
        <div>
          <h1>My form!</h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input
              type='text'
              name='name'
              placeholder='Enter campus'
              value={this.state.name}
              onChange={this.handleChange} />
            <br />
            <label>Description:</label>
            <input
              type='text'
              name='description'
              placeholder='Describe school'
              value={this.state.description}
              onChange={this.handleChange} />
            <br />
            <label>Image:</label>
            <input type='text'
              name='image'
              placeholder='Add image link'
              value={this.state.imageUrl}
              onChange={this.handleChange} />
            <br />
            <button
              type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }

}

  function mapDispatchToProps (dispatch) {
    console.log('calling thunk');
    return {
      getCampuses: function() {
        dispatch(fetchCampuses());
      }
    };
  }

const AddCampusContainer = connect(null, mapDispatchToProps)(AddCampus);

export default AddCampusContainer;

import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class EditCampusForm extends Component {
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
    // console.log('---> handleSubmit props:', this.props.fetchCampuses);
    event.preventDefault();
    let tempCampusState = Object.assign({}, this.state);
    if (tempCampusState.imageUrl === '') {
      delete tempCampusState.imageUrl;
    }
    axios.put(`/api/campus/${this.props.campus.id}`, tempCampusState)
      .then( () => {
        this.setState({
          name: '',
          description: '',
          imageUrl: ''
        });
      })
      .then(() => {
        console.log('invoking thunk');
        this.props.fetchCampuses();
        this.props.history.push(`/campus/${this.props.campus.id}`);
      });
  }

  render () {

    return (
      <div>
        <div>
          <h1>Edit {this.props.campus.name}!</h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input
              type='text'
              name='name'
              placeholder='Change name'
              value={this.state.name}
              onChange={this.handleChange} />
            <br />
            <label>Description:</label>
            <input
              type='text'
              name='description'
              placeholder='Change description'
              value={this.state.description}
              onChange={this.handleChange} />
            <br />
            <label>Image:</label>
            <input type='text'
              name='image'
              placeholder='Change image'
              value={this.state.imageUrl}
              onChange={this.handleChange} />
            <br />
            <button
              type='submit'>Submit</button>
          </form>
        </div>
        <div>
          <div>
            <h2>Current information</h2>
          </div>
          <div>
            <p>Name: {this.props.campus.name}</p>
            <p>Description: {this.props.campus.description}</p>
            <img src={this.props.campus.imageUrl} />
          </div>
        </div>
      </div>
    );
  }

}

const EditFormWithHistoryWithRouter = withRouter(EditCampusForm);

export default EditFormWithHistoryWithRouter;

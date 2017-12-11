import React, { Component } from 'react';

class AddCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      image: ''
    };
  }

  handleChange (event) {
    const formValue =
  }

  render () {

    return (
      <div>
        <div>
          <h1>My form!</h1>
        </div>
        <div>
          <form>
            <label>Name:</label>
            <input type='text' />
            <br/>
            <label>Description:</label>
            <input type='text' />
            <br/>
            <label>Image:</label>
            <input type='text' />
          </form>
        </div>
      </div>
    )
  }

}

export default AddCampus;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Campus (props) {
  return (
    <div>
      <div>
        <Link to='/campus/new'><button>Add campus</button></Link>
      </div>
      <div>
        <h1>Interstellar Campuses!</h1>
      </div>
      <div>
        <ul>
          {
            props.campuses && props.campuses.map(campus =>
              (
              <li key={campus.id}>
                <div>
                  <p>Name: {campus.name}</p>
                  <p>Description: {campus.description}</p>
                  <br />
                  <Link to={`/campus/${campus.id}`}><button>Details...</button></Link>
                  <br />
                  <img src={campus.imageUrl} />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    campuses: state.campuses
  };
}

const CampusContainer = connect(mapStateToProps)(Campus);

export default CampusContainer;

import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <img src='http://main.sfiacademy.org/images/10154000_10204333701377555_5192769921788264488_n.jpg' />
    </div>
  );
}

export default Home;

// <button onclick={<CampusLoader />}Campuses</button>
// <Link to='/api/campus'><button>Campuses</button></Link>
// <Link to='/api/students'><button>Students</button></Link>

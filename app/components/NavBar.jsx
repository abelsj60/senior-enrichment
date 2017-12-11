import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

function NavBar(props) {
  if (props.location.pathname !== '/home'){
    return (
      <div>
        <Link to='/home'><button>Home</button></Link>
        <Link to='/campus'><button>Campuses</button></Link>
        <Link to='/students'><button>Students</button></Link>
      </div>
    );
  } else {
    return (
      <div>
        <Link to='/campus'><button>Campuses</button></Link>
        <Link to='/students'><button>Students</button></Link>
      </div>
    );
  }
}

const ShowTheLocationWithRouter = withRouter(NavBar);

export default ShowTheLocationWithRouter;

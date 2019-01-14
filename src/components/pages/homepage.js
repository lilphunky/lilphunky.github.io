import React, { Component } from 'react';

import homepic from '../../images/shilohprom.jpg';

const homeDiv = {
    position: 'relative',
    marginTop: 50,
    borderStyle: 'solid',
    borderColor: 'black',
    width: 'auto',
    height: 'auto',
}

const center = {
    position: 'relative',
    width: 200,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 5,
    textAlign: 'center',
    margin: 'auto',
}

const intro = {
    position: 'relative',
    width: 600,
    // borderStyle: 'solid',
    // borderColor: 'black',
    // borderWidth: 1,
    marginTop: 5,
    textAlign: 'center',
    margin: 'auto',
}

const homepicStyle = {
    display: 'block',
    position: 'relative',
    maxWidth: '50%',
    height: 'auto',
    margin: 'auto',
    borderStyle: 'solid',
    borderColor: 'black',
    
}

class Homepage extends Component {

  render() {
    return (
      <div className='homepage' style={homeDiv}>
          <h1 style={intro}>Welcome to the doghouse!</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <img style={homepicStyle} src={homepic} />
      </div>
    );
  }
}

export default Homepage;

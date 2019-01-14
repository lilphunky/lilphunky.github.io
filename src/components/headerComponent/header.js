import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

const headerStyle = {
  position: 'relative',
  display: 'block',
  width: '100%',
  maxWidth: 450,
  height: 60,
  margin: 'auto',
  marginTop: 0,
  backgroundColor: 'rgb(128, 198, 255)',
  color: 'white',
  // borderStyle: 'solid',
  // borderColor: 'black',
  // borderWidth: 1,
}

const logo = {
  position: 'absolute',
  top: '50%',
  left: 15,
  color: 'black',
  borderStyle: 'solid',
  borderColor: 'black',
  borderWidth: 1,
}

const navigation = {
  position: 'absolute',
  width: 400,
  height: 'auto',
  margin: 0,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  // borderStyle: 'solid',
  // borderColor: 'black',
  // borderWidth: 1,
}

const list = {
  display: 'inline',
  marginRight: 10,
}

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>

          <div style={navigation}>
            <ul>
              <li style={list}>
                <Link to='/'>Home</Link>
              </li>
              <li style={list}>
                <Link to='/shiloh'>Shiloh</Link>
              </li>
              <li style={list}>
                <Link to='/bentley'>Bentley</Link>
              </li>
              <li style={list}>
                <Link to='/remy'>Remy</Link>
              </li>
              <li style={list}>
                <Link to='/nephew'>Nephew</Link>
              </li>
              <li style={list}>
                <Link to='/simba'>Simba</Link>
              </li>
            </ul>
          </div>
      </header>
    );
  }
}

export default Header;

import React, { Component } from 'react';

const subheading = {
  position: 'relative',
  textAlign: 'center',
}

class Simba extends Component {
  render() {
    return (
      <div className="simba">
        <h1 style={subheading}>Simba</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    );
  }
}

export default Simba;
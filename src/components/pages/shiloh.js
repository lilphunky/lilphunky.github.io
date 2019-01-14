import React, { Component } from 'react';

//import pic from 

const title = {
  position: 'relative',
  textAlign: 'center',
}

class Shiloh extends Component {
  render() {
    return (
      <div className="shiloh">
        <h1 style={title}>Shiloh</h1>
        <p>Woof! My name is Shiloh! I'm a golden retriever and dachschund mix! I was born around 
          Thanksgiving 2009 with my brothers Jeffy and Kimchi and my sister Remy. </p>
      </div>
    );
  }
}

export default Shiloh;
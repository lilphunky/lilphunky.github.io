import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homepage';
import Shiloh from './components/pages/shiloh';
import Bentley from './components/pages/bentley';
import Remy from './components/pages/remy';
import Nephew from './components/pages/nephew';
import Simba from './components/pages/simba';

import styles from './index.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shiloh' component={Shiloh} />
        <Route exact path='/bentley' component={Bentley} />
        <Route exact path='/remy' component={Remy} />
        <Route exact path='/nephew' component={Nephew} />
        <Route exact path='/simba' component={Simba} />


      </div>
      </Router>
    );
  }
}

export default App;

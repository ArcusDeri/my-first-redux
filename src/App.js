import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home/Home';
import About from './components/about/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container-fluid">
        <p>Header</p>
        {this.props.children}
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/about" component={ About } />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home/Home';
import About from './components/about/About';
import Header from './common/header/Header';
import CoursesPage from './components/course/CoursesPage';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container-fluid">
					<Header/>
					{this.props.children}
					<Switch>
						<Route path="/" exact component={ Home } />
						<Route path="/about" component={ About } />
						<Route path="/courses" component={ CoursesPage } />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

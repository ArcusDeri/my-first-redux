import React from 'react';
import { Link } from 'react-router-dom';
import Separator from './Separator';

const Header = () => (
	<nav>
		<Link to="/">Home</Link>
		<Separator/>
		<Link to="/courses">Courses</Link>
		<Separator/>
		<Link to="/about">About</Link>
	</nav>
);

export default Header;
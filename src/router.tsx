import * as React from 'react';
import { Router, Route } from 'react-router';
import HomePage from './routes/HomePage';
import NotFound from './routes/NotFound';
import Adder from './routes/Adder';

export default function ({ history }) {
	return (
		<Router history={history}>
			<Route path="/" component={HomePage} />
			<Route path="/adder" component={Adder} />
			<Route path="/*" component={NotFound} />
		</Router>
	);
}
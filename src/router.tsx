import * as React from 'react';
import { Router, Route, IndexRoute, Link, Redirect } from 'react-router';
import ListPage from './routes/HomePage';
import ItemPage from './routes/NotFound';
import UserPage from './routes/Adder';

export default function ({ history }) {
	return (
		<Router history={history}>
			<Redirect from="/" to="/top" />
			<Route path="/top">
				<IndexRoute component={ListPage} />
				<Route path=":page" component={ListPage} />
			</Route>
			<Route path="/new">
				<IndexRoute component={ListPage} />
				<Route path=":page" component={ListPage} />
			</Route>
			<Route path="/show">
				<IndexRoute component={ListPage} />
				<Route path=":page" component={ListPage} />
			</Route>
			<Route path="/ask">
				<IndexRoute component={ListPage} />
				<Route path=":page" component={ListPage} />
			</Route>
			<Route path="/job">
				<IndexRoute component={ListPage} />
				<Route path=":page" component={ListPage} />
			</Route>
			<Route path="/item/:itemId" component={ItemPage} />
			<Route path="/user(/:userId)" component={UserPage} />
		</Router>
	);
}

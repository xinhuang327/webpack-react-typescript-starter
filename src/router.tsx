import * as React from 'react'
import { Router, Route, IndexRoute, Link, Redirect } from 'react-router'
import ListPage from './routes/ListPage'
import ItemPage from './routes/ItemPage'
import UserPage from './routes/UserPage'

// <Redirect from="/" to="/top" />
// 			<Route path="/top">
// 				<IndexRoute component={ListPage} />
// 				<Route path=":page" component={ListPage} />
// 			</Route>

export default function ({ history }) {
	return (
		<Router history={history}>

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

			<Route path="/">
				<IndexRoute component={ListPage} />
				<Route path=":page" component={ListPage} />
			</Route>
		</Router>
	)
}

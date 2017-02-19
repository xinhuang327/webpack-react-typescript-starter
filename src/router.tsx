import * as React from 'react'
import { Router, Route } from 'react-router'
import HomePage from './routes/HomePage'
import NotFound from './routes/NotFound'
import Adder from './routes/Adder'
import BlueprintUITest from "./routes/BlueprintUITest"

export default function ({ history }) {
	return (
		<Router history={history}>
			<Route path="/" component={HomePage} />
			<Route path="/adder" component={BlueprintUITest} />
			<Route path="/*" component={NotFound} />
		</Router>
	)
}
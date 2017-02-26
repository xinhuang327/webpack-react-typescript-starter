import * as React from 'react'

import { Master } from "./Master"
import { Child } from "./Child"

export class App extends React.Component<any, any> {
	render() {
		return (
			<Master>
				<Child />
			</Master>
		)
	}
}

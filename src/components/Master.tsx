import * as React from 'react'

export class Master extends React.Component<any, any> {
	render() {
		console.log("Master....")
		return (
			<div>
				<div>Master</div>
				<div>{this.props.children}</div>
			</div>
		)
	}
}

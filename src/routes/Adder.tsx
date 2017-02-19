import * as React from 'react'
import { connect } from 'typed-dva'
const styles = require('./HomePage.css')

function Adder(props) {
	return (
		<div className={styles.normal}>
			<h1 className={styles.title}>Adder</h1>
			Count: {props.count}
			<hr />
			<button onClick={() => { props.dispatch({ type: 'count/add' }) }}>Add~~</button>
			<button onClick={() => { props.dispatch({ type: 'count/addWithDelay' }) }}>Add With Delay</button>
			<button onClick={() => { props.dispatch({ type: 'count/minus' }) }}>Minus</button>
			<button onClick={() => { props.dispatch({ type: 'count/redirect' }) }}>redirect</button>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		count: state.count,
	}
}

export default connect(mapStateToProps)(Adder)

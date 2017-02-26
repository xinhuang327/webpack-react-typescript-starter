import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'

import { App } from "./components/App"

let styles = require('./app.css')
let less_styles = require('./app.less')// not working

console.log(styles)
console.log(less_styles)

let v = 5
let content = <div className={less_styles.box}>Oh yes {v} </div>

ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	document.getElementById('root')
)

declare var module: any
if (module.hot) {
	module.hot.accept('./components/App', () => {
		ReactDOM.render(
			<AppContainer>
				<App />
			</AppContainer>,
			document.getElementById('root')
		)
	})
}

// ReactDOM.render(
// 	<AppContainer>
// 		<Master>
// 			<Child />
// 			<div className={styles.hello}>
// 				<h1>Hello, world!</h1>
// 				{content}
// 			</div>
// 		</Master>
// 	</AppContainer>,
// 	document.getElementById('root')
// )
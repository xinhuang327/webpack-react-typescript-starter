import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'
import { App } from "./components/App"

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

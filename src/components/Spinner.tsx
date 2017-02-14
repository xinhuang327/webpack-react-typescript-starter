
import * as React from 'react'
import { Link } from 'react-router'
import * as classnames from 'classnames'
let styles = require('./Spinner.less')


class Spinner extends React.Component<{ loading: boolean }, any> {
	render() {
		const svgCls = classnames({
			[styles.spinner]: true,
			[styles.show]: this.props.loading,
		})
		return (
			<div>
				<svg className={svgCls} width="44px" height="44px" viewBox="0 0 44 44">
					<circle className={styles.path} fill="none" strokeWidth="4" strokeLinecap="round" cx="22" cy="22" r="20" />
				</svg>
			</div>
		)
	}
}

export default Spinner

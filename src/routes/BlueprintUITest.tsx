import * as React from 'react'
import { connect } from 'typed-dva'
import {
	Button,
	Menu,
	MenuItem,
	MenuDivider,
	Popover,
	Position
} from "@blueprintjs/core"

import "@blueprintjs/core/dist/blueprint.css"

function BlueprintUITest(props) {
	const menu = (
		<Menu>
			<MenuItem text="New" />
			<MenuItem text="Open" />
			<MenuItem text="Save" />
			<MenuDivider />
			<MenuItem text="Settings..." />
		</Menu>
	)
	return (
		<Popover content={menu} position={Position.BOTTOM_RIGHT}>
			<Button text="Actions" />
		</Popover>
	)
}

function mapStateToProps(state) {
	return {
	}
}

export default connect(mapStateToProps)(BlueprintUITest)
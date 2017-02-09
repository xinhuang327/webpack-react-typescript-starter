import * as React from 'react';
import * as ReactDOM from 'react-dom';

// extract specific components
import { Intent, Spinner } from "@blueprintjs/core";
// or just take everything!
import * as Blueprint from "@blueprintjs/core";

// using JSX:
const mySpinner = <Spinner intent={Intent.PRIMARY} />;

// using the namespace import:
const anotherSpinner = <Blueprint.Spinner intent={Blueprint.Intent.PRIMARY} />;


let styles = require('./app.css');
let less_styles = require('./app.less');// not working

console.log(styles)
console.log(less_styles)

let v = 5
let content = <div className={less_styles.box}>Oh yes {v} </div>

ReactDOM.render(
	<div className={styles.hello}>
		<h1>Hello, world!</h1>
		{content}<br />
		{mySpinner}<br />
		{anotherSpinner}<br />
	</div>,
	document.getElementById('root')
);
import * as React from 'react';
import * as ReactDOM from 'react-dom';


let styles = require('./app.css');
let less_styles = require('./app.less');// not working

console.log(styles)
console.log(less_styles)

let v = 5
let content = <div className={less_styles.box}>Oh yes {v} </div>

ReactDOM.render(
	<div className={styles.hello}>
		<h1>Hello, world!</h1>
		{content}
	</div>,
	document.getElementById('root')
);
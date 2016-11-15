'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

class Test extends Component {	
	render(){
		return (
			<ul>
				<li>a</li>
				<li>b</li>
				<li>c</li>
				<li>d</li>
			</ul>
		)
	}
}
//alert('123');
let root = document.getElementById('app');
ReactDOM.render( <Test />, root );
'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../components/Button/Button';
import imgUrl from "../../img/ming.png";
import "./index.scss";
let root = document.getElementById('app');
class Img extends Component {
	render(){
		return <img src={imgUrl} />
	}
}
class Txt extends Component{
	render(){
		return (
			<div className="ming">
				<ul>
					<li><Button /></li>
					<li>b</li>
					<li>c</li>
					<li>d</li>
				</ul>
				<div>
					<Img />
				</div>
			</div>
		)
	}
}
ReactDOM.render( <Txt  />, root );
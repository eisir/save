'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../components/Button/Button';
import MyComponent from '../components/MyComponents/MyComponent';
import Layout from '../components/Layout/Layout';
import imgUrl from "../../img/ming.png"
import "./index.scss"
import Mock from 'mockjs'

let root = document.getElementById('app');

var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
console.log(JSON.stringify(data, null, 4))
class Index extends Component {
	render(){
		return (
			<div>
				<Layout />
			</div>
		)
	}
}


ReactDOM.render( <Index  />, root );
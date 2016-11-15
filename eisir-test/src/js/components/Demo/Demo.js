import React, { Component , PropTypes } from 'react';

class Demo extends Component {
	componentWillReceiveProps(nextProps){
	    console.log('componentWillReceiveProps');
	    this.setState({
	        value: nextProps.value
	    });
	}
	
	shouldComponentUpdate(nextProps,nextState){
	    console.log('shouldComponentUpdate');
	    return true;
	}
	
	
	componentWillUpdate(nextProps,nextState){
		console.log('componentWillUpdate');
	}
	
	componentWillMount(){
	    console.log('componentWillMount');
	}

	render(){
		console.log('render');
		return <span>{this.props.value}</span>
	}
	
	componentDidMount() {
		console.log('componentDidMount');
	}
	
	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate');
	}
	
	componentWillUnmount(prevProps, prevState) {
		console.log('componentWillUnmount');
	}
}
export default Demo;
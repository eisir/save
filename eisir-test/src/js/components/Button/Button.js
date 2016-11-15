import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Button.less'
class Button extends Component {
  handleClick(){
    alert('点击了');
  }
  render(){    
    return (
    	<div className="text-center button-block">
	      <button className="my-button" onClick={this.handleClick.bind(this)}>
	        快戳我
	      </button>
	      <div className="tip">1</div>
	      <span className="glyphicon glyphicon-asterisk"></span>
	    </div>
    );
   }
}
export default Button;
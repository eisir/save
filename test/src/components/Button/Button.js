import React, { Component } from 'react';

class Button extends Component {
  handleClick(){
    alert('点击了');
  }
  render(){
    const style = require('./button.less');

    return (
      <button className="my-button" onClick={this.handleClick.bind(this)}>
        点击我
      </button>
    );
  }
}
export default Button;
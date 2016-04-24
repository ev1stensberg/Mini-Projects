import React from 'react';

const WorldHello = React.createClass({
  getDefaultProps: function() {
    return {
      value: 'hey'
    };
  },


  render() {
    return (<h1>{this.props.value} this is props</h1>)
  }
})

export default WorldHello;

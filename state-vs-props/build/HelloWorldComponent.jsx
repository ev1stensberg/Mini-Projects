import React from 'react';

const HelloWorld = React.createClass({
  getInitialState() {
    return {hello: 'hello' }

  },
  render() {
    return (<div><h1>{this.state.hello}  this is state</h1></div>)
  }
})
export default HelloWorld;


/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

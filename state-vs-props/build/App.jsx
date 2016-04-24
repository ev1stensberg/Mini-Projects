import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorldComponent';
import WorldHello from './WorldHelloComponent';
// You can use const Home = require('./App.jsx') if you'd like

ReactDOM.render(<HelloWorld  />,
document.getElementById('content'));

ReactDOM.render(<WorldHello />,
document.getElementById('content1'));

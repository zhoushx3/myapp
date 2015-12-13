import React from 'react';
import ReactDOM from 'react-dom';
import './socket';
import 'jquery';
import 'bootstrap';
import Chat from './component/chat/Main';
import Login from './component/user/Login';

ReactDOM.render(<Login  />, document.getElementById('container'));
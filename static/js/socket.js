// socket listneer
// dispatch constant that was registered at socketRegister.js

import Dispatcher from './Dispatcher';
import CommonConstant from './constant/CommonConstant';
import ChatConstant from './constant/ChatConstant';

import './socketRegister';

window.__SOCKET__ = io('http://localhost:8081');

__SOCKET__.on('open', (data)=>{
	Dispatcher.dispatch({
		type: CommonConstant.ON_CONNECT,
		payload: data
	});
});

__SOCKET__.on('chatting', (data)=>{
	Dispatcher.dispatch({
		type: ChatConstant.GET_MSG,
		payload: data
	});
});

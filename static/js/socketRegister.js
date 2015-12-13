// action when socket receive message

import Dispatcher from './Dispatcher';
import ChatConstant from './constant/ChatConstant';
import CommonConstant from './constant/CommonConstant';

import ChatStore from './store/ChatStore';

Dispatcher.register( (action) => {
	switch (action.type) {
		case CommonConstant.ON_CONNECT:
			ChatStore.onConnect(action.payload);
		break;
	}
})
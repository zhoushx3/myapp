import assign from 'object-assign';
import Dispatcher from '../Dispatcher';

import EventStore from './EventStore';
import ChatAPI from '../api/ChatAPI';

import ChatConstant from '../constant/ChatConstant';
import CommonConstant from '../constant/CommonConstant';

const ChatStore = assign({}, EventStore, {
	onConnect(data) {
		EventStore.emitChange(CommonConstant.ON_CONNECT, data);
	},

	getMsg() {

	},

	postMsg(data){
		ChatAPI.postMsg(data);
	}
});

Dispatcher.register( (action) => {
	switch (action.type) {
		case ChatConstant.POST_MSG:
			ChatStore.postMsg(action.payload);
		break;
	}
})




export default ChatStore;
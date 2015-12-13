import Dispatcher from '../Dispatcher';
import ChatConstant from '../constant/ChatConstant';
import ChatStore from '../store/ChatStore';


const ChatAction =  {

	postMsg(data) {
		Dispatcher.dispatch({
			type: ChatConstant.POST_MSG,
			payload: data
		});
	}
}

export default ChatAction;
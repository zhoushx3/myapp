
const ChatAPI = {
	postMsg(data) {
		__SOCKET__.emit('chatting', data);
	}
}

export default ChatAPI;
import React from 'react';
import EventStore from '../../store/EventStore';
import CommonConstant from '../../constant/CommonConstant';
import ChatConstant from '../../constant/ChatConstant';
import ChatAction from '../../action/ChatAction';
import '../../../css/chat.css';


const Chat = React.createClass({

	getInitialState(){
		return {
			msg: []
		}
	},

	componentDidMount(){
		EventStore.addChangeListener(CommonConstant.ON_CONNECT, this._onConnect);
		EventStore.addChangeListener(ChatConstant.GET_MSG, this._getMsg);
	},

	componentWillUnmount(){
		EventStore.removeChangeListener(CommonConstant.ON_CONNECT, this._onConnect);
		EventStore.removeChangeListener(ChatConstant.GET_MSG, this._getMsg);
	},

	_onConnect(res) {
		console.log(res);
	},

	_getMsg(res) {
		console.log('msg');
		console.log(res);
	},

	postMsg(){
		let msg = this.refs.msgInput.value;
		msg && ChatAction.postMsg(msg);
	},

	render(){
		let other = 'me';
		let msg = this.state.msg.map((i, j)=>{
			return <SingleMsg msg={i} key={j} />
		});

		return (
			<div className="chatWindow">
				<h1>to {other}</h1>
				{msg}
				<div className="fixBottom msgInput">
					<input ref="msgInput" type="text" />
					<button onClick={this.postMsg}>send</button>
				</div>
			</div>
		)
	}


});

const SingleMsg = React.createClass({

	render() {
		var msg = this.props.msg;

		return (
			<div className="">
				<div>
					<span>{__USER__.name}</span>
					<span>{msg.time}</span>
				</div>
				<div>
					{msg.msg}
				</div>
			</div>
		)
	}
});

export default Chat;
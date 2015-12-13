import React from 'react';
import EventStore from '../../store/EventStore';

const Login = React.createClass({

	render(){
		return (
			<div className="container-fluid">
				<div className="form-inliNamene">
				  <div className="form-group">
				    <label>Name</label>
				    <input type="text" className="form-control" id="userName" placeholder="Jane Doe" />
				  </div>
				  <div className="form-group">
				    <label>Email</label>
				    <input type="email" className="form-control" placeholder="example@example.com" />
				  </div>
				  <button type="submit" className="btn btn-default">登录</button>
				</div>
			</div>
		)
	}
});

export default Login;
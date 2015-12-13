import { EventEmitter } from 'events';
import assign from 'object-assign';

const EventStore = assign( {}, EventEmitter.prototype, {
	// 后期修改为可以传多个参数的
	emitChange(EVENT, args) {
		this.emit(EVENT, args);
	},

	addChangeListener(EVENT, callback) {
		this.on(EVENT, callback);
	},

	removeChangeListener(EVENT, callback) {
		this.removeListener(EVENT, callback);
	}
});

export default EventStore;

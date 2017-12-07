import types from '../Store/types';

export default store => next => action => {
	const promiseStatus = ['PENDING', 'FULFILLED', 'REJECTED'];
	console.log(action);
	next(action);
}

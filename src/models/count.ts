import { Router } from 'react-router';
import * as routerRedux from "react-router-redux"

// import "babel-polyfill"

const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));

export default {
	namespace: 'count',
	state: 0,
	reducers: {
		add(state) { return state + 1; },
		minus(state) { return state - 1; },
	},
	effects: {
		*addWithDelay(action, { call, put }) {
			yield call(delay, 500);
			yield put({ type: 'add' });
		},
		*redirect(action, { put }) {
			yield put(routerRedux.push('/abc'));
		},
	},
}

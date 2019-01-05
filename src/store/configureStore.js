import { createStore, applyMidleware } from 'react-redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const configureStore = initialState => {
	return createStore(
		rootReducer,
		initialState,
		applyMidleware(reduxImmutableStateInvariant())
		);
};

export default configureStore;

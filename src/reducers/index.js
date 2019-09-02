import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import searchResultReducer from './searchResultReducer';

export default combineReducers({
	searchResult: searchResultReducer,
	form: formReducer
});
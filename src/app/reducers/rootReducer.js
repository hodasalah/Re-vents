import { combineReducers } from 'redux';
import TestReducer from '../../features/TestArea/TestReducer';


const rootReducer = combineReducers({
	test:TestReducer
});
export default rootReducer;
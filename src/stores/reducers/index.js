import { combineReducers } from 'redux'
import userReducer from './user.reducer'
import { counterReducer } from './counter.reducer'
//insert another reducers here to be combined

const reducers = combineReducers({
  userReducer,
  counterReducer
})

export default reducers

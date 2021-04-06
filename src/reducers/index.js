import { combineReducers } from 'redux'
import blogs from './blogs'
import member from './member'
import uiReducer from './ui'
const rootReducer = combineReducers({
  blogs, member, ui: uiReducer
})
  
  export default rootReducer
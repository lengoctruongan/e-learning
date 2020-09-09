import {combineReducers} from 'redux'
import CoureReducer from './CoureReducer'
const rootReducer=combineReducers({
    coure:CoureReducer,
})
export default rootReducer
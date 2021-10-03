import {changeTheNumber,changeTheObject} from './updown'
import {combineReducers}  from "redux"

const rootreducer= combineReducers({
    changeTheNumber,
    changeTheObject
})

export default rootreducer
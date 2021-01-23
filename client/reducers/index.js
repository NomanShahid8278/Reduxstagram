import {combineReducer} from 'redux'
import {routerReducer} from 'react-router-redux'
import posts from './posts'
import comments from './comments'

const rootReducer = combineReducer({posts,comments, router: routerReducer})
export default rootReducer
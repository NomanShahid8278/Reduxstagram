import {createStore,compose} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'

// import the root reducer
import rootReducer from './reducers/index'

// import data
import comments from './data/comments'
import posts from './data/posts'

const defaultState = {
    posts,
    comments
}

// Store takes two parameters ,first rootReducer and second defaultState
const store = createStore(rootReducer,defaultState)
export const history = syncHistoryWithStore(browserHistory,store)
export default store
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import blogReducer from '../reducers/blogs'
import authReducer from '../reducers/auth'
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = [thunk]

const configStore = () => {
  const store = createStore(
    combineReducers({
      blogs: blogReducer,
      auth: authReducer
    }),
    composeWithDevTools(applyMiddleware(...middleware))
  )

  return store
}

export default configStore
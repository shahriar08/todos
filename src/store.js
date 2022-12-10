//actual data which will be used in the application


import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const middleware = [thunk]

const initialState = {}
const store = createStore(  
    initialState,
    rootReducer,
    compose(
        applyMiddleware(...middleware)
    )
)

export default store;
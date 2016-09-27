/**
 * Created by sunsu on 2016/9/18.
 */
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit, fetchPostsIfNeeded } from './action/action'
import rootReducer from './reducer/reducer'

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
        loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
    )
)



store.dispatch(selectSubreddit('reactjs'))
store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
    console.log('aaaaaaaaaaaa',store.getState())
)
import {createStore, applyMiddleware, compose} from 'redux' // 引入createStore方法
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import mySaga from './saga'


const sagaMiddleware = createSagaMiddleware()
// 使用增强函数建立链式函数 保证Redux Dev Tools 和thunk 同时使用 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
// const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(
  reducer,
  enhancer
) // 创建数据存储仓库

sagaMiddleware.run(mySaga)
export default store // 暴露出去
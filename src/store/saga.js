import {takeEvery, put} from 'redux-saga/effects'
import {SAGA_LIST} from './actionType'
import {getTaleList} from './actionCreators'
import axios from 'axios'
function * mySaga() {
  yield takeEvery(SAGA_LIST, getList)
}

function * getList() {
  console.log('hsw')
  const res = yield axios.get('https://www.fastmock.site/mock/0cd1ac7447e5d2cef420a29a4ab29730/tableList/api/getTableList')
  const action = getTaleList(res.data.data.list)
  yield put(action)
}
export default mySaga;
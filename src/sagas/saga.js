import { takeLatest, put, delay } from 'redux-saga/effects'



function* updateUserAsync(action) {
    yield delay(1000)
    yield put({type: 'UPDATE_USER_ASYNC', payload: action.payload})
}

export function* watchUpdateUser() {
    console.log("UPDATE_USER dispatched")
    yield takeLatest("UPDATE_USER", updateUserAsync)
}
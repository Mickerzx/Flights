import {takeEvery} from 'redux-saga/effects'
import {FETCH_FLIGHT_REQUEST, EDIT_FLIGHT_REQUEST, CREATE_FLIGHT_REQUEST, DELETE_FLIGHT_REQUEST} from "./actions/types";
import {createFlightWorker, deleteFlightWorker, editFlightWorker, fetchFlightWorker} from "./workers";

export function* fetchFlightWatcher() {
    yield takeEvery(FETCH_FLIGHT_REQUEST, fetchFlightWorker)
}

export function* editFlightWatcher() {
    yield takeEvery(EDIT_FLIGHT_REQUEST, editFlightWorker)
}

export function* createFlightWatcher() {
    yield takeEvery(CREATE_FLIGHT_REQUEST, createFlightWorker)
}
export function* deleteFlightWatcher() {
    yield takeEvery(DELETE_FLIGHT_REQUEST, deleteFlightWorker)
}
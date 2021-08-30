import axiosApi from "../axiosApi";
import {
    deleteFlightFailure,
    deleteFlightSuccess,
    editFlightFailure,
    editFlightSuccess,
    fetchFlightFailure,
    fetchFlightSuccess
} from "./actions/action";

import {put} from 'redux-saga/effects'

interface IResponse {
    data?: any;
}

export function* fetchFlightWorker() {
    try {
        const response: IResponse = yield axiosApi.get('/flights')
        yield put(fetchFlightSuccess(response.data))
    } catch (error) {
        yield put(fetchFlightFailure(error))
    }

}

export function* editFlightWorker(data: any) {

    try {
        yield axiosApi.put('/flights', data.payload)
        yield put(editFlightSuccess())
    } catch (error) {
        yield put(editFlightFailure(error))
    }

}

export function* createFlightWorker(data: any) {

    try {
        yield axiosApi.post('/flights', data.payload)
        yield put(editFlightSuccess())
    } catch (error) {
        yield put(editFlightFailure(error))
    }

}

export function* deleteFlightWorker(data: any) {

    try {
        yield axiosApi.delete('http://localhost:8000/flights/' + data.payload._id)
        yield put(deleteFlightSuccess())
    } catch (error) {
        yield put(deleteFlightFailure(error))
    }

}
import {createReducer} from "@reduxjs/toolkit";
import {
    createFlightFailure,
    editFlightFailure, editFlightRequest, editFlightSuccess,
    fetchFlightFailure,
    fetchFlightRequest,
    fetchFlightSuccess
} from "../actions/action";

export type initialStateType = {
    loading: boolean,
    flights:object[]
    error: null | string
};

const initialState = {
    loading: true,
    flights: [],
    error: null
};


export default createReducer(initialState, {

    [fetchFlightRequest]: (state) => {
        state.loading = true;
    },
    [fetchFlightSuccess]: (state, action) => {
        state.loading = false
        state.flights = action.payload
    },
    [fetchFlightFailure]: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },
    [editFlightRequest]: (state) => {
        state.loading = true;
    },
    [editFlightSuccess]: (state) => {
        state.loading = false;
    },
    [editFlightFailure]: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },
    [createFlightFailure]: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },
})
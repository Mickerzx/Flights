import {createAction} from "@reduxjs/toolkit";
import {
    CREATE_FLIGHT_FAILURE,
    CREATE_FLIGHT_REQUEST,
    CREATE_FLIGHT_SUCCESS, DELETE_FLIGHT_FAILURE, DELETE_FLIGHT_REQUEST, DELETE_FLIGHT_SUCCESS,
    EDIT_FLIGHT_FAILURE,
    EDIT_FLIGHT_REQUEST,
    EDIT_FLIGHT_SUCCESS,
    FETCH_FLIGHT_FAILURE,
    FETCH_FLIGHT_REQUEST,
    FETCH_FLIGHT_SUCCESS
} from "./types";


export const fetchFlightRequest: any = createAction(FETCH_FLIGHT_REQUEST)
export const fetchFlightSuccess: any = createAction(FETCH_FLIGHT_SUCCESS, (data) => ({payload: data}))
export const fetchFlightFailure: any = createAction(FETCH_FLIGHT_FAILURE, (error) => ({payload: error}))

export const editFlightRequest: any = createAction(EDIT_FLIGHT_REQUEST, (data) => ({payload: data}))
export const editFlightSuccess: any = createAction(EDIT_FLIGHT_SUCCESS)
export const editFlightFailure: any = createAction(EDIT_FLIGHT_FAILURE, (error) => ({payload: error}))

export const createFlightRequest: any = createAction(CREATE_FLIGHT_REQUEST, (data) => ({payload: data}))
export const createFlightSuccess: any = createAction(CREATE_FLIGHT_SUCCESS)
export const createFlightFailure: any = createAction(CREATE_FLIGHT_FAILURE, (error) => ({payload: error}))

export const deleteFlightRequest: any = createAction(DELETE_FLIGHT_REQUEST, (data) => ({payload: data}))
export const deleteFlightSuccess: any = createAction(DELETE_FLIGHT_SUCCESS)
export const deleteFlightFailure: any = createAction(DELETE_FLIGHT_FAILURE, (error) => ({payload: error}))


import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducers';

export default function createStore() {
    return configureStore({
        reducers: rootReducer,
        middleware: [],
        preloadedState
    })
}
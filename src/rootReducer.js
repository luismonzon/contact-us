import { reducers as authReducers } from 'auth';
import { reducers as configReducers } from 'config';

export const rootReducer =  [ authReducers, configReducers ];
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core'; 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './reducers';
import { watchUpdateUser } from '../sagas/saga';


const sagaMiddleWare = createSagaMiddleware()

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleWare),
);

sagaMiddleWare.run(watchUpdateUser)

export const persistore = persistStore(store);

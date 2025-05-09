import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage
import { persistReducer, persistStore } from 'redux-persist'


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
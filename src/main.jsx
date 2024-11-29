import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {createStore, combineReducers, applyMiddleware} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

import accountReducer from './slices/accountSlice.jsx';
import bonusReducer from './slices/bonusSlice.jsx';
import rewardReducer from './reducers/reward.reducer.js'

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

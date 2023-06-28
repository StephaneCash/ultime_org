import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import actualitesSlice, { getAllactualites } from './reducers/Actualites';
import { combineReducers } from "redux";

const store = configureStore({
  reducer: combineReducers({
    actualites: actualitesSlice.reducer,
  })
});

store.dispatch(getAllactualites());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
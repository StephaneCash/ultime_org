import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import actualitesSlice, { getAllactualites } from './reducers/Actualites';
import { combineReducers } from "redux";
import DocumentsSlice, { getAllDocuments } from './reducers/Documents';
import imageSlice, { getAllimages } from './reducers/Images';

const store = configureStore({
  reducer: combineReducers({
    actualites: actualitesSlice.reducer,
    documents: DocumentsSlice.reducer,
    images: imageSlice.reducer,
  })
});

store.dispatch(getAllactualites());
store.dispatch(getAllDocuments());
store.dispatch(getAllimages());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
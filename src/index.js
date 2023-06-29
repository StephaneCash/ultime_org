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
import categorieActusSlice, { getAllcategoriesActus } from './reducers/CategorieActus';

const store = configureStore({
  reducer: combineReducers({
    actualites: actualitesSlice.reducer,
    documents: DocumentsSlice.reducer,
    images: imageSlice.reducer,
    categorieActus: categorieActusSlice.reducer,
  })
});

store.dispatch(getAllactualites());
store.dispatch(getAllDocuments());
store.dispatch(getAllimages());
store.dispatch(getAllcategoriesActus());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
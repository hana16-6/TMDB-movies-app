import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import './index.scss';
import { store } from './redux/store'
import { RouterProvider } from "react-router-dom";
import router from './apps/Routes/pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>
);

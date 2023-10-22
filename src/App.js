import { Outlet } from 'react-router-dom';
import './App.scss';
import Navbar from './layouts/Navbar';
import Loader from './components/Loader';
import React from 'react';

function App() {
  return (
    <div>
      <Navbar />
      <React.Suspense fallback={<Loader />}>
        <Outlet />
      </React.Suspense>

    </div>
  );
}

export default App;

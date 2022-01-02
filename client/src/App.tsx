import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './style/GlobalStyle';

const Home = React.lazy(() => import('./pages/Home'));
const Learn = React.lazy(() => import('./pages/Learn'));
const Login = React.lazy(() => import('./pages/Login'));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={null}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/learn"
          element={
            <Suspense fallback={null}>
              <Learn />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={null}>
              <Login />
            </Suspense>
          }
        />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;

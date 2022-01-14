import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import GlobalStyle from './style/GlobalStyle';
import RequireAuth from './components/RequireAuth';

import Home from './pages/Home';
const Learn = React.lazy(() => import('./pages/Learn'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="learn"
          element={
            <Suspense fallback={null}>
              <RequireAuth>
                <Learn />
              </RequireAuth>
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;

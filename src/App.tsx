import LoginPage from 'Authenticated flow/LoginPage';
import SignUpPage from 'Authenticated flow/SignUpPage';
import AuthenticateHomePage from 'Pages/AuthenticateHomePage';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import store from 'store';

const App: React.FC = () => (
  <Provider store={store}>
    <Routes>
      <Route path='/' element={<AuthenticateHomePage />} />
      <Route path='signin' element={<LoginPage />} />
      <Route path='signup' element={<SignUpPage />} />
    </Routes>
  </Provider>
);

export default App;

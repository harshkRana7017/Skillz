import LoginPage from 'Authenticated flow/LoginPage';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

const App: React.FC = () => (
  <Provider store={store}>
    <div>
      <LoginPage />
    </div>
  </Provider>
);

export default App;

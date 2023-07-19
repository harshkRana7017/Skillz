import SignUpPage from 'Authenticated flow/SignUpPage';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

const App: React.FC = () => (
  <Provider store={store}>
    <div>
      <SignUpPage />
    </div>
  </Provider>
);

export default App;

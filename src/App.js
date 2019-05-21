import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import store from './store';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoclose={5000} />
    </Provider>
  );
}

export default App;

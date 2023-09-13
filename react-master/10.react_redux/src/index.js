import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Provider(제공자) 컴포넌트 : Redux를 사용할 수 있게 해 주는 컴포넌트
// 모든 컴포넌트가 store에 접근할 수 있도록 연결해 주는 역할
import { Provider } from 'react-redux';

import store from './redux/store'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store ={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
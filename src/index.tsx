import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store/store";
import './fonts/Montserrat-Regular.ttf'
import './fonts/Montserrat-Bold.ttf'
import './fonts/Montserrat-Medium.ttf'
import './fonts/Montserrat-SemiBold.ttf'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
reportWebVitals();

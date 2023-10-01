import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {FirebaseAppProvider} from "reactfire";
import {firebaseConfig} from './firebase-config.js';
import {Loading} from 'react-daisyui'
import {Provider} from "react-redux";
import {store} from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <Suspense fallback={<Loading/>}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </Suspense>
        </FirebaseAppProvider>
    </React.StrictMode>,
)

import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {FirebaseAppProvider} from "reactfire";
import {firebaseConfig} from './firebase-config.js';
import {Loading} from 'react-daisyui'
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <Suspense fallback={<Loading/>}>
                <PersistGate loading={<Loading/>} persistor={persistor}>
                    <Provider store={store}>
                        <App/>
                    </Provider>
                </PersistGate>
            </Suspense>
        </FirebaseAppProvider>
    </React.StrictMode>,
)

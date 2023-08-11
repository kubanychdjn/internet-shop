import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { ContextProvider } from "./components/Context/Context";
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ContextProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </ContextProvider>
    </React.StrictMode>
);


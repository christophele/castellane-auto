import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import Routes from './routes';
// import AccueilPage from './components/pages/AccueilPage';
import thunk from 'redux-thunk';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/mdb.css';
import {BrowserRouter} from 'react-router-dom';
import {ACTION_TYPES} from './actions/action-types';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const user = localStorage.getItem('user');
const userClient = localStorage.getItem('userClient');

if(user) {
    store.dispatch({type: ACTION_TYPES.AUTH_MONITEUR});
}

if(userClient) {
    store.dispatch({type: ACTION_TYPES.AUTH_CLIENT});
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
                <Routes />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

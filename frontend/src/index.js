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
import './components/Waves';
import {BrowserRouter} from 'react-router-dom';
import {ACTION_TYPES} from './actions/action-types';
import {IntlProvider} from 'react-intl';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const user = localStorage.getItem('user');

if(user) {
    store.dispatch({type: ACTION_TYPES.AUTH_MONITEUR});
}


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <IntlProvider locales={['fr-FR']}>
                <Routes />
            </IntlProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

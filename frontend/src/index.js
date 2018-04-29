import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import Routes from './routes';
import thunk from 'redux-thunk';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/mdb.css';
import './components/Waves';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Routes />
</Provider>, document.getElementById('root'));

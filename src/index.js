import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import ReduxThunk from 'redux-thunk'

//O objetivo do middleware é facilitar o desenvolvimento de aplicações
//Exemplos comuns de middleware incluem middleware de banco de dados, middleware de servidor de aplicativos, middleware orientado a mensagens, middleware de web 

/**Pra que serve o redux thunk?
 * Quando precisamos fazer algum procedimento assíncrono como uma requisição http
 * em que dependo do retorno da requisição para encaminhar ao reducer temos um 
 * problema. Para resolver esse problema temos que usar o Redux Thunk para que 
 * possamos segurar o retorno da action até que o processo assíncrono finalize.*/
ReactDOM.render(
    <Provider store={createStore(rootReducer, {}, applyMiddleware(ReduxThunk))}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
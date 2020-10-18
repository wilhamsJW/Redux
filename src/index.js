import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import ReduxThunk from 'redux-thunk'
import Store from './store/Store'
import Video from './components/video/Video';

//O objetivo do middleware é facilitar o desenvolvimento de aplicações
//Exemplos comuns de middleware incluem middleware de banco de dados, middleware de servidor de aplicativos, middleware orientado a mensagens, middleware de web 

/**Pra que serve o redux thunk?
 * Quando precisamos fazer algum procedimento assíncrono como uma requisição http
 * em que dependo do retorno da requisição para encaminhar ao reducer temos um 
 * problema. Para resolver esse problema temos que usar o Redux Thunk para que 
 * possamos segurar o retorno da action até que o processo assíncrono finalize.*/

 /**O Provider engloba todas as rotas e faz com que todos os componentes enxerguem os dados armazenados na minha store */
ReactDOM.render(
    <Provider store={Store}> 
    {/**AVISO: PAra testar isso guardando dados em uma API da pasta pages e fazendo uma requisição http com redux
     * substitua o store={Store} pela linha abaixo.
     * 
     * store={createStore(rootReducer, {}, applyMiddleware(ReduxThunk))} se coloca essa linha apenas quando vamos usar
     * o reduxthunk pra cadastrar dados numa API, se for apenas exibir dados na view só precisa colocar o nome do arquivo
     * que está guardando os dados no caso esses arquivos com os dados são chmados de store entãos se coloca Store 
     * no Provider dessa forma => store={Store}
     */}
        <Router>
            <App />
            <Video />
        </Router>
    </Provider>, document.getElementById('root'));

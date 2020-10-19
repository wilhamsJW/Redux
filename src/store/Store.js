import {createStore} from 'redux' //createStore => cria um estado global que chamamos de store, onde fica armazenado
                                 //a maioria das informações da nossa aplicação, esse Store está sendo invocado no index da aplicação e passado como valor dentro do provider do redux

import wilhamJunior from './reducers' //importando o reducers que tem todos o reducers que eu invoquei na minha aplicação

const store = createStore(wilhamJunior); //chamando a função ou método createStore com o parãmetro de rootReducers
                                        //coloquei meu nome só pra mostrar q pode ser um nome qq

export default store;

/**com este código acima consigo trabalhar com vários reducers */
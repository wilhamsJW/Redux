import { createStore } from 'redux'; //createStore => cria um estado global que chamamos de store, onde fica armazenado
//a maioria das informações da nossa aplicação

const INTIAL_STATE = {
    activeLesson: {}, //vai armazenar as informações da lesson ativa, isso é o estado inicial e portanto deve ser vazio, algo do tipo null daria erro
    activeModule: {}, //vai armazenar as informações da Module ativa
    modules: [
        {
            id: 1, title: 'Iniciando com React', lessons: [
                { id: 1, title: 'Primeira aula' },
                { id: 2, title: 'Segunda aula' },
                { id: 3, title: 'Terceira aula' },
                { id: 4, title: 'Quarta aula' },
            ],
        },

        {
            id: 2,
            title: 'Aprendendo Redux',
            lessons: [
                { id: 5, title: "Quinta aula" },
                { id: 6, title: "Sexta aula" }
            ]
        }
    ]
}

//reducer é uma função que é chamada pelo redux para alterar os estados  
/**o redux tem praticamente dois estados, o reducer e as action, as actions são as ações que vão determinar o que vai acontecer 
 * ao estado do meu componente
 * 
 * Reducer => toda manipulação do store é feita por uma função chamada reducer, ele recebe o estado e ação
 * com essa ação a gente visualiza o que precisa ser alterado no estado e assim o reducer entrega o state
 * atualizado
 */
function reducer(state = INTIAL_STATE, action) {
    console.log("Store,Aqui", action); //nesse console irá mostrar todos os dados clikado, a id da lesson e a id do module e qual aula foi clikada 

    if (action.type === 'Dẽ um nome preferido') {console.log("ifdofjndosfnsdf");
        return { ...state, 
            activeLesson: action.lesson, 
            activeModule: action.module }
    }
    return state;
}


const Store = createStore(reducer); //chamando a função ou método createStore

export default Store; //exportando
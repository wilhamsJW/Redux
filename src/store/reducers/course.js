const INITIAL_STATE = {
    activeLesson: {},   //vai armazenar as informações da lesson ativa, isso é o estado inicial e portanto deve ser vazio, algo do tipo null daria erro
    activeModule: {},  //vai armazenar as informações da Module ativa para serem mostradas na view
                      //ambos receberão valores do reducer pela action enviada pelo dispatch, olhe o reducer abaixo e entenda
    modules: [
        {
            id: 1, title: 'Iniciando com React', lessons: [
                { id: 1, title: 'Primeira aula', date: '17/08/1993' },
                { id: 2, title: 'Segunda aula', date: '22/22/1454' },
                { id: 3, title: 'Terceira aula', date: '33/33/1676' },
                { id: 4, title: 'Quarta aula', date: '04/44/1767' },
            ],
        },

        {
            id: 2,
            title: 'Aprendendo Redux',
            lessons: [
                { id: 5, title: "Quinta aula", date: '05/05/16678' },
                { id: 6, title: "Sexta aula", date: '06/06/1987' }
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
export default function reducer(state = INITIAL_STATE, action) {
    console.log("Store,Aqui", action);  //nesse console irá mostrar todos os dados clikado, a id da lesson e a id do module e qual aula foi clikada 
                                       //a action já vem setada pelo dispatch, o dispatch pega os valores q estão sendo clikados pelo usuário e coloca como parametro pra action ler, essa action é a função valueStore so siderbar

    if (action.type === 'Dẽ um nome preferido') { //esse 'Dẽ um nome preferido' é um type da action enviada pelo dispatch, ela é uma função do sidebar enviada pelo dispatch 
        return { ...state, 
            activeLesson: action.Aula_escohida, 
            activeModule: action.valores_do_objeto_escolhido };  
    } 
    return state;
}


//const Store = createStore(reducer); //chamando a função ou método createStore

//export default Store; //exportando
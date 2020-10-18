import React from 'react';
//import Video from '../video/Video';
import {connect} from 'react-redux';

//Essa função é responsável por mostrar qual foram os valores escolhidos pelo usuário, valores como: id, titulo ou
//qq outra informação que se tenha. Essa função tá sendo chamada pelo dispatch
function valueStore (valores_do_objeto_escolhido, Aula_escohida) {
    
    return {

       /* esse type vai conter a açaõ que será tomada e esse nome é decidido pelo próprio dev
         * os valores module e lesson que vem do store são justamente ele que estão guardando os valores
         * vindo do json de store, se dermos um console.log(action) em Store.js na function reducer, veremos
         * que os valores clikados pelo user serão mostrados pelo console. As Ids do module e lesson 
         * e os seus valores será tudo mostrado se vc de um console em store na function reducer na action
        */
        
        type: 'Dẽ um nome preferido',
        Aula_escohida,
        valores_do_objeto_escolhido
    };
};

// DISPATCH => Todo componente do redux recebe uma função chamada dispatch, serve pra disparar actions pra o redux,
//e essas actions serão ouvidas por todos os reducers da minha aplicação 
//sem o dispatch é impossivel trabalhar com redux, ele que irá mandar a ação clikada pelo usuário para o redux e o reducer para que esses vejam o que precisa ser alterado do componente


/**Essas informações abaixo só estão conseguindo serem acessadas por conta do uso do redux e reducer,
 * dentro do connect acessamos essas informações com arrow function, colocamos um parãmetro qq e no escopo
 * da função colocamos o nome do objeto que queremos acessar do store mais o parãmetro, igual no connect abaixo
 * e colocamos o componente em questão com parenteses ao lado pra poder haver uma conexão
 */
const Siderbar = ({modules, dispatch}) => ( {/**modules => nome do objeto guardado no store*/},
    <aside>
        {modules.map(module => (  {/**module é apenas o parãmetro passdo pra minha arrowfunction, poderia ser qq nome, depois que o parãmetro é dado ele consegue enxergar o que foi definido pelo objeto a ser mapeado pelo map, no caso coloquei modules.map que é nome do objeto so store que estou acessando */}, 
            <div key={module.id}> {/**Cada elemento filho deve conter essa Key dentro */}
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson => (
                        <li key={lesson.id}>{lesson.title}
                        <button onClick={() => dispatch(valueStore(module, lesson))}>Selecionar</button>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
)

export default connect(nomeQualquer => ({modules: nomeQualquer.modules}) )(Siderbar);  //o connect além de conectar ele compartilha o estado do redux e os valores apŕesentadaos na lista acima, por isso que usamos ele e colocamos o sidebar como segundo parãmetro
                                                                         //connect => funciona mais ou menos como uma conexão de banco de dados
                                                                        //modules => é o nome do objeto no store 
                                                                       //nomeQualquer => é apenas o parãmetro 
                                    

/* Aqui foi criado um objeto e exibimos ele em uma lista, acima usamos o redux pra fazer essas alterações dos components
export default class Siderbar extends Component {

    state = {
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
                    { id: 3, title: "Terceira aula" },
                    { id: 4, title: "Quarta aula" }
                ]
            },
        ],
    };


    render() {

        const { modules } = this.state;

        return (
            <aside>
                <Video></Video>
                {modules.map(module => (
                    <div key={module.id}>
                        <strong>{module.title}</strong>
                        <ul>
                            {module.lessons.map(lesson => (
                                <li key={lesson.id}>{lesson.title}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </aside>
        );
    }
}*/
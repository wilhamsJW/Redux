import React from 'react';
//import Video from '../video/Video';
import { connect } from 'react-redux'; //conexão do estado da Store ao componente
import Video from '../video/Video';

import {bindActionCreators} from 'redux' //ele consegue mapear o course.js dentro da pasta action ou esse import => import * as CourseActions from '../../store/actions/course'
import * as course from '../../store/actions/course'

// DISPATCH => Todo componente do redux recebe uma função chamada dispatch, serve pra disparar actions pra o reducer,
//e essas actions serão ouvidas por todos os reducers da minha aplicação 
//sem o dispatch é impossivel trabalhar com redux, ele que irá mandar a ação clikada pelo usuário para o reducer para que ele veja o que precisa ser alterado do componente


/**Essas informações abaixo só estão conseguindo serem acessadas por conta do uso do redux e reducer,
 * dentro do connect acessamos essas informações com arrow function, colocamos um parãmetro qq e no escopo
 * da função colocamos o nome do objeto que queremos acessar do store mais o parãmetro, igual no connect abaixo
 * e colocamos o componente em questão com parenteses ao lado pra poder haver uma conexão
 * 
 * Metododispatch => é um método criado em actions/course.js (+ info em actions/course.js)
 * 
 */
const Siderbar = ({modules, Metododispatch }) => (      {/**modules => nome do objeto guardado no store*/},
    <aside>
        
        {/****************************************************************************
         * Este componente => <Video />  que está recebenco as atualizações do redux *
         * ***************************************************************************/}
        <Video />

        {modules.map(module => (  {/**module é apenas o parãmetro passdo pra minha arrowfunction, poderia ser qq nome, depois que o parãmetro é dado ele consegue enxergar o que foi definido pelo objeto a ser mapeado pelo map, no caso coloquei modules.map que é nome do objeto so store que estou acessando */}, 
            <div key={module.id}> {/**Cada elemento filho deve conter essa Key dentro */}
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson => (
                        <li key={lesson.id}>{lesson.title}
                        {/**Essa é uma forma de chamar o dispatch e action de forma direta sem criar um método
                         * <button onClick={() => dispatch(CourseActions.valueStore(module, lesson))}>Selecionar</button> */}
                        {/**dispatch envia a ação pra action, está em ../../store/actions/course sendo importada acima, a action é quem envia a informação pra o reducer e o reducer atualiza o store, os state e o componente em si */}
                        <button onClick={() => Metododispatch(module, lesson)}>Selecionar</button>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
)

/** mapStatetoProps => O nome escolhido é uma conveção, transforma um trecho do estado da Store em uma 
 * prop utilizável pelo componente */
const mapStatetoProps = state => ({  //contém as informações a serem exibidas na view, abaixo conectamos tudo para que a lista acima possa ser preenchida
                                    //state -> é apenas o nome do parâmetro
    modules: state.course.modules  //aqui tá sendo visualizadas todas as informações do reducers/course.js
                                  //modules => é o nome do objeto em reducers/course.js
                                 //course => é o estado incial em reducers/course.js    
})

//Forma 01 de codar o mapDispatchToProps
/*
const mapDispatchToProps = dispatch => ({
    Metododispatch: (module, lesson) => dispatch(course.valueStore(module, lesson))
})*/


//Aqui estamos vinculando a minha action ou dispatch (como queira chamar), para q seja ouvido pelo reducer no arquivo 
//reducers/course.js, fazemos isso através do bindActionCreators 
const mapDispatchToProps = dispatch =>  // dispatch => tbm é convenção. 
 bindActionCreators(course, dispatch)  // bindActionCreators => vincular criadores de ação, vincula a action e o dispatch ao reducer
                                      // course => é o estado incial em reducers/course.js


export default connect(mapStatetoProps, mapDispatchToProps)(Siderbar);    //o connect além de conectar ele compartilha o estado do redux e os valores apŕesentadaos na lista acima, por isso que usamos ele e colocamos o sidebar como segundo parãmetro
                                                                         //connect => funciona mais ou menos como uma conexão de banco de dados
                                                                        //modules => é o nome do objeto no store, o connect tbm me trás os dados de forma automática graças a inteligênçia do redux
                                                                       
                                    

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
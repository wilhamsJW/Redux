//Essa função é a Action do Redux. A view chama a action que chama o dispatch que chama o reducer, o reducer ver os state dos componentes e atualiza os states devolvendo pra view a atualização
//Essa função é responsável por mostrar qual foram os valores escolhidos pelo usuário, valores como: id, titulo ou
//qq outra informação que se tenha. Essa função tá sendo chamada pelo dispatch

//aqui gerou erro com default, use a importação dess forma: import * as CourseActions from '../../store/actions/course'
export function Metododispatch(valores_do_objeto_escolhido, Aula_escohida) {
    
    return {

       /* esse type vai conter a açaõ que será tomada e esse nome é decidido pelo próprio dev
         * os valores module e lesson que vem do store são justamente ele que estão guardando os valores
         * vindo do json de store, se dermos um console.log(action) em Store.js na function reducer, veremos
         * que os valores clikados pelo user serão mostrados pelo console. As Ids do module e lesson 
         * e os seus valores será tudo mostrado se vc de um console em store na function reducer na action
        */
        
        //Nesta função que é um action do redux, sempre tem que ter uma chave chamada type (o valor dela é qq um)
        type: 'Dẽ um nome preferido',
        Aula_escohida,
        valores_do_objeto_escolhido
    };
};
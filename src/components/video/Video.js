import React from 'react';
import { connect } from 'react-redux';

const Video = ({activeModule, activeLesson}) => ( //activeModule, activeLesson => são inicialmente vazios no store.js mas eles que guardam as infomrções escolhidas pelo usuário
    <div>
        <strong>Módulo: {activeModule.title}</strong><br></br>
        <span> Aula: {activeLesson.title}</span><br />
        <span>Data: {activeLesson.date}</span><br />
        <span>N°: {activeLesson.id}</span><br />
        <span>Nº do módulo: {activeModule.id}</span>
    </div>
);


export default connect(state => ({      //esse state é definido no store pelo reducer
    activeModule: state.course.activeModule,  //essa informações já vem setadas pelo reducer, mas quando tiver alguma informação escolhida pelo user elas mostrarão aqui
    activeLesson: state.course.activeLesson, //até então activemodule e activelesson são arrays vazios mas quando o usuário escolhe algo eles passam a ter os valores escolhidos pelos usuários e exibidos onde queremos
}))(Video);
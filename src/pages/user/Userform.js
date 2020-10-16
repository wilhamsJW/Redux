import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import React from 'react'
import {submitUserAction} from '../actions/user/UserAction'

//Os dados abaixo fazem parte de um cadastro em uma API
const UserFormFunc = props => {

    const {handleSubmit} = props //handleSubmit é do redux-form

   const submit = (data, submitUserAction) => {
        submitUserAction(data)
    }

    return (
        <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
            <label>
                Name
           </label>
            <Field
                type="text"
                component="input"
                name="name" />
            <label>
                Email
           </label>
            <Field
                type="text"
                component="input"
                name="email" />
                <button type="submit">Enviar</button>

        </form>
    );
}

const UserForm = (reduxForm({
    form: 'Pode ser qq nome aqui' //isso aqui q vai deixar o input digitável
}))(UserFormFunc)

const mapStateToProp = state => ({ //mapStateToProp pode ter qq nome serve apenas para alterar o estado

})

export default connect(mapStateToProp, {submitUserAction})(UserForm) //aqui conectamos a alteração do estado, enviamos pra uma API, e fazemos com q a função UserFormFunc utilize o redux-form
import { combineReducers } from 'redux'; //serve pra quando temos vários reducers, várias funcionalidades na nossa aplicaçação, quando temos vários states pra serem alterados

import course from './course'

export default combineReducers({
    course,
})

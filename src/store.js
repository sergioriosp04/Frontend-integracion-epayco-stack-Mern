import { createStore } from 'redux'
import reducer from './reducers'

//definir state inicial
//const initialState = []

export const store = createStore (   
    reducer,
    //initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
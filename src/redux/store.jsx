import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth";
import { counterReducer } from "./counter/reducer";
import { todoReducer } from "./todos/reducer";



const rootReducer = combineReducers({
    counter : counterReducer,
    todos : todoReducer,
    auth : authReducer
})

export const store = createStore(rootReducer,
    applyMiddleware(thunk)
    // +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
)

console.log(store.getState())


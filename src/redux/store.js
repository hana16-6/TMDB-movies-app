import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
const logger = createLogger();




export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))

)

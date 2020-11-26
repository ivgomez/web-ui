import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import tutoriasReducer from "./reducers/tutoriasReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  tutoriasPersonalizadas: tutoriasReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;

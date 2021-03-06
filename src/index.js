import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import burgerReducer from './redux/reducer/burgerReducer';
import orderReducer from "./redux/reducer/orderReducer";
import signupLoginReducer from "./redux/reducer/signupLoginReducer";

const logger = store => {
  return next => {
    return action => {
      // console.log("Logger Middleware action ===>", action);
      // console.log("Middleware before ===>", store.getState());
      const result = next(action);
      // console.log("Logger Middleware after ===>", result);
      return result;
    }
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
  burgerReducer: burgerReducer,
  orderReducer: orderReducer,
  signupLoginReducer: signupLoginReducer
});

const middlewares = [logger, thunk];
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

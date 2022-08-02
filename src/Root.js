import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from 'redux-promise';
import reducers from "reducers";

function Root(props) {
    const store = createStore(reducers, props.initialState, applyMiddleware(reduxPromise));
    
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}

export default Root;
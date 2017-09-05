import {createStore, applyMiddleware, compose, GenericStoreEnhancer} from 'redux'
import {IAppState} from './IAppState'
import {reducer} from './reducer'


declare var window:any;

const devToolExtension: GenericStoreEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION__) 
    ? window.__REDUX_DEVTOOLS_EXTENSION__() : console.log("error");


export const store = createStore<IAppState>(reducer, 
    compose(devToolExtension) as GenericStoreEnhancer);
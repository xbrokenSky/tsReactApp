import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import getPokemonSaga from '../sagas/sagas';
import appReducer from '../reducers/reducers';

const sagaMiddleware = createSagaMiddleware();

export const initialState = {
    itemData: [
        {
            id: 12,
            text: 'first item',
        },
        {
            id: 432,
            text: 'second item',
        },
    ],
};

export const store = createStore(
    appReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(getPokemonSaga);

export default store;

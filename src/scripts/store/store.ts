import { createStore } from 'redux';
import appReducer from '../reducers/reducers';

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
const store = createStore(appReducer, initialState);

export default store;

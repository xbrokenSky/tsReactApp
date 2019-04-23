import { combineReducers, Reducer } from 'redux';
import { StoreShape, SingleItem } from '../types/reducers.interface';
import { DataAction } from '../types/action.interface';
import C from '../constants/constants';

export const itemData = (state: SingleItem[] = [], action: DataAction): SingleItem[] => {
    const { type, payload } = action;

    switch (type) {
        case C.ADD_ITEM:
            return [
                ...state,
                payload,
            ];
        case C.DELETE_ITEM:
            return state.filter((item: SingleItem): boolean => {
                return item.id !== payload.id;
            });
        case C.EDIT_ITEM:
            return state.map((item: SingleItem): SingleItem => {
                if (item.id === payload.id) {
                    const editedItem = {
                        ...item,
                        text: payload.text,
                    };

                    return editedItem;
                }
                return item;
            });
        default:
            return state;
    }
};

const appReducer: Reducer<StoreShape> = combineReducers({
    itemData,
});

export default appReducer;

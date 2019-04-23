import { getId } from '../helpers/funcHelpers';
import { DataAction } from '../types/action.interface';
import C from '../constants/constants';

export const addItem = (text: string): DataAction => {
    return {
        type: C.ADD_ITEM,
        payload: {
            text,
            id: getId(),
        },
    };
};

export const delItem = (id: number): DataAction => {
    return {
        type: C.DELETE_ITEM,
        payload: {
            id,
            text: '',
        },
    };
};

export const editItem = (id: number, text: string): DataAction => {
    return {
        type: C.EDIT_ITEM,
        payload: {
            id,
            text,
        },
    };
};

import { getId } from '../helpers/funcHelpers';
import { DataAction, FetchAction, FetchStarted } from '../types/action.interface';
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

export const fetchData = (pokeName: string): FetchAction => {
    return {
        type: C.FETCH_DATA,
        payload: pokeName,
    };
};

export const fetchStarted = (): FetchStarted => {
    return {
        type: C.FETCH_DATA_STARTED,
    };
};

export const fetchSuccess = (data: object): FetchAction => {
    return {
        type: C.FETCH_DATA_SUCCEED,
        payload: data,
    };
};

export const fetchFailed = (error: object): FetchAction => {
    return {
        type: C.FETCH_DATA_FAILED,
        payload: error,
    };
};

export interface DataAction {
    type: string;
    payload: { id: number; text: string };
}

export interface FetchAction {
    type: string;
    payload: string | object;
}

export interface FetchStarted {
    type: string;
}

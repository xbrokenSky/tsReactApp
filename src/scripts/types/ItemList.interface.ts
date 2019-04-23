import { SingleItem } from './reducers.interface';

export interface ListProps {
    itemData: SingleItem[];
    deleteItem: (id: number) => void;
}

export interface ListState {
    clickCount: number | null;
}

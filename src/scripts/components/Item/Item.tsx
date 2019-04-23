import React from 'react';
import { ItemProps } from '../../types/Item.interface';
import './Item.scss';

const Item: React.FC<ItemProps> = React.memo(({ label, removeItem }): JSX.Element => {
    return (
        <li className='list-item'>
            <p className='list-item__text'>
                {label}
            </p>
            <button
                className='list-item__del-btn btn btn-outline-danger'
                type='button'
                onClick={removeItem}
            >
                Del
            </button>
        </li>
    );
});

Item.defaultProps = {
    label: null,
    removeItem: (): null => { return null; },
};

export default Item;

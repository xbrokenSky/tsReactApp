import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import memoizeOne from 'memoize-one';
import { delItem } from '../../actions/actions';
import { DataAction } from '../../types/action.interface';
import { StoreShape } from '../../types/reducers.interface';
import { ListProps, ListState } from '../../types/ItemList.interface';
import Item from '../Item/Item';
import './ItemList.scss';

class ItemList extends React.Component<ListProps, ListState> {
    public static defaultProps = {
        itemData: [],
        deleteItem: (f: number): number => { return f; },
    }

    public constructor(props: ListProps) {
        super(props);

        this.state = {
            clickCount: null,
        };
    }

    public getItems = (): JSX.Element[] => {
        const items = this.props.itemData.map((item): JSX.Element => {
            const { id, text } = item;
            const { deleteItem } = this.props;
            const removeItem = (): void => {
                deleteItem(id);

                this.setState(({ clickCount }: { clickCount: number }): object => {
                    return {
                        clickCount: clickCount + 1,
                    };
                });
            };

            return (
                <Item removeItem={removeItem} key={id} label={text} />
            );
        });

        return items;
    }


    public render(): JSX.Element {
        const { clickCount } = this.state;
        const elems = this.getItems();

        return (
            <div className='list-div'>
                <p className='list-div__title'>
                    Del button clicked: {clickCount || 'not clicked yet'}
                </p>
                <ul className='list'>
                    {elems}
                </ul>
            </div>
        );
    }
}

interface DispatchProps {
    deleteItem: (id: number) => void;
}

const mapStateToProps = ({ itemData }: StoreShape): StoreShape => {
    return {
        itemData,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<DataAction>): DispatchProps => {
    return {
        deleteItem: (id: number): void => {
            dispatch(delItem(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

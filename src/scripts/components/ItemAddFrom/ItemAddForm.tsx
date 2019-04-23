import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addItem } from '../../actions/actions';
import './ItemAddForm.scss';

export interface AddFormProps {
    addNewItem: (value: string) => void;
}
export interface AddFormState {
    inputValue: string;
}

export class ItemAddForm extends React.PureComponent<AddFormProps, AddFormState> {
    public constructor(props: AddFormProps) {
        super(props);

        this.state = {
            inputValue: '',
        };
    }

    public onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value.trim();
        // const fieldName = e.target.name;

        this.setState({
            inputValue: value,
        });
    }

    public onSubmit = (e: React.FormEvent<HTMLFormElement>): null => {
        e.preventDefault();

        const { addNewItem } = this.props;
        const { inputValue } = this.state;

        if (inputValue !== '') {
            addNewItem(inputValue);

            this.setState({
                inputValue: '',
            });
        }

        return null;
    }

    public render(): JSX.Element {
        return (
            <form
                className='add-item-form'
                id='add-item-form'
                onSubmit={this.onSubmit}
            >
                <input
                    type='text'
                    className='add-item-form__txt-input form-control'
                    name='inputValue'
                    onChange={this.onChange}
                    value={this.state.inputValue}
                    placeholder='Type new item here...'
                />
                <button
                    className='add-item-from__submit-btn btn btn-primary'
                    type='submit'
                >
                    submit
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch): AddFormProps => {
    return {
        addNewItem: (value: string): void => {
            dispatch(addItem(value));
        },
    };
};

export default connect(null, mapDispatchToProps)(ItemAddForm);

import React from 'react';
import ConnectedAddFrom from '../ItemAddFrom/ItemAddForm';
import ItemList from '../ItemList/ItemList';

const MainPage: React.FC = (): JSX.Element => {
    return (
        <section className='main-page'>
            <ConnectedAddFrom />
            <ItemList />
        </section>
    );
};

export default MainPage;

import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './AppHeader.scss';

export const AppHeader: React.FC = React.memo((): JSX.Element => {
    return (
        <header className='app-header'>
            <h1 className='app-header__title'>
                TypeScript React
            </h1>
            <nav className='app-header__nav'>
                <ul className='app-header__nav-list'>
                    <li className='app-header__nav-item'>
                        <NavLink
                            exact
                            strict
                            to='/'
                            className='app-section__nav-link'
                            activeClassName='selected'
                        >
                            MainPage
                        </NavLink>
                    </li>
                    <li className='app-header__nav-item'>
                        <NavLink
                            exact
                            strict
                            to='/other/'
                            className='app-header__nav-link'
                            activeClassName='selected'
                        >
                            OtherPage
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
});


export default withRouter(AppHeader);

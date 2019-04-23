import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import MainPage from '../pages/MainPage';

const App = (): JSX.Element => {
    return (
        <Router>
            <section className='app-section'>
                <header className='app-section__header'>
                    <h1 className='app-section__title'>
                        TypeScript Title
                    </h1>
                    <nav className='app-section__nav'>
                        <ul className='app-section__nav-list'>
                            <li className='app-section__nav-item'>
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
                            <li className='app-section__nav-item'>
                                <NavLink
                                    exact
                                    strict
                                    to='/other/'
                                    className='app-section__nav-link'
                                    activeClassName='selected'
                                >
                                    OtherPage
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={MainPage}
                    />
                    <Route
                        path='/other/'
                        render={(): JSX.Element => {
                            return (
                                <div>
                                    OtherPage!
                                </div>
                            );
                        }}
                    />
                    <Redirect to='/' />
                </Switch>
            </section>
        </Router>
    );
};

export default App;

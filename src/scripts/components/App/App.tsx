import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import RoutedAppHeader from '../AppHeader/AppHeader';
import MainPage from '../pages/MainPage';

const App = (): JSX.Element => {
    return (
        <Router>
            <section className='app-section'>
                <RoutedAppHeader />
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

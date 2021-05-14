import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import BackgroundLogo from './components/Layout/BackgroundLogo';
import BackgroundImage from './components/Layout/BackgroundImage';
import classes from './App.module.css';

const App = () => {
    return (
        <main className={classes.app}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/home" component={Home} />
                </Switch>
            </Router>
            <BackgroundLogo />
            <BackgroundImage />
        </main>
    );
};

export default App;

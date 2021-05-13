import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import logoImg from './assets/images/logo.png';
import classes from './App.module.css';

const App = () => {
    const [imageNumber, setImageNumber] = useState(1);

    useEffect(() => {
        setInterval(() => {
            setImageNumber(Math.floor(Math.random() * 7) + 1);
        }, 5000);
    }, []);

    return (
        <main
            className={classes.app}
            style={{
                backgroundImage: `url("/images/background_${imageNumber}.png")`,
            }}
        >
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
            <img
                className={classes['app-logo']}
                src={logoImg}
                alt="Horizon Zero Dawn logo"
            />
        </main>
    );
};

export default App;

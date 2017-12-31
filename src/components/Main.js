import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
        </Switch>
    </main>
);

export default Main;
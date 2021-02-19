import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AdminPage } from './AdminPage';
import { Header } from './Header';
import ProductsComponentWrapper from './ProductsComponentWrapper';
import ProductDetailsComponentWrapper from './ProductDetailsComponentWrapper';

const Routes: React.FC<{}> = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Route path='/products' component={ProductsComponentWrapper}/>
                <Route path='/product' component={ProductDetailsComponentWrapper}/>
                <Route path='/admin' component={AdminPage}/>
            </div>
        </Router>
    )
}

export default Routes;
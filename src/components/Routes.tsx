import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AdminPage } from './AdminPage';
import ProductsComponentWrapper from './ProductsComponentWrapper';
import { Header } from './Header';

const Routes: React.FC<{}> = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Route path='/products' component={ProductsComponentWrapper}/>
                <Route path='/admin' component={AdminPage}/>
            </div>
        </Router>
    )
}

export default Routes;
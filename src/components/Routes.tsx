import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AdminPage } from './AdminPage';
import ProductsComponentWrapper from './ProductsComponentWrapper';

const Routes: React.FC<{}> = () => {
    return (
        <Router>
            <div>
                <Route path='/products' component={ProductsComponentWrapper}/>
                <Route path='/admin' component={AdminPage}/>
            </div>
        </Router>
    )
}

export default Routes;
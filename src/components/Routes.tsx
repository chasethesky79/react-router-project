import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AdminPage } from './AdminPage';
import { Header } from './Header';
import ProductsComponentWrapper from './ProductsComponentWrapper';
import ProductDetailsComponentWrapper from './ProductDetailsComponentWrapper';
import { NotFoundPageComponent } from './NotFoundPage';

const Routes: React.FC<{}> = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Redirect exact={true} from='/' to='/products'/>
                    <Route path='/products' exact={true} component={ProductsComponentWrapper}/>
                    <Route path='/products/:id' component={ProductDetailsComponentWrapper}/>
                    <Route path='/admin' component={AdminPage}/>
                    <Route component={NotFoundPageComponent}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;
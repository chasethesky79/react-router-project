import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AdminPage } from './AdminPage';
import HeaderComponent from './Header';
import ProductsComponentWrapper from './ProductsComponentWrapper';
import ProductDetailsComponentWrapper from './ProductDetailsComponentWrapper';
import { NotFoundPageComponent } from './NotFoundPage';
import { useState } from 'react';
import { LoginPage } from './LoginPage';

const Routes: React.FC<{}> = () => {
    const [loggedIn] = useState(false);
    return (
        <Router>
            <div>
                <HeaderComponent/>
                <Switch>
                    <Redirect exact={true} from='/' to='/products'/>
                    <Route path='/products' exact={true} component={ProductsComponentWrapper}/>
                    <Route path='/products/:id' component={ProductDetailsComponentWrapper}/>
                    <Route path='/login' component={LoginPage}/>
                    <Route path='/admin'>
                        {loggedIn ? <AdminPage/> : <Redirect to='/login'/>}
                    </Route>
                    <Route component={NotFoundPageComponent}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Routes;
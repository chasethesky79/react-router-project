import * as React from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import logo from '../../src/logo.svg';
import '../styles/Header.css';
import { HeaderWrapper, ImageWrapper, HeaderTitle } from '../styled-components/styled-components';
import { getSearchText } from '../util/search-utils';
import { createBrowserHistory } from 'history';
import { SearchFieldProps } from '../models/product-model';
import { Searchbox } from './SearchBox';
const Header: React.FC<RouteComponentProps> = (props) => {
    const searchText = getSearchText(props);
    const history = createBrowserHistory({ forceRefresh: true }) as any;
    const searchFieldProps: SearchFieldProps = {
      searchText,
      history
    };
        
    return (
        <HeaderWrapper>
          <div className='search-container'>
            <Searchbox {...searchFieldProps}/>
          </div>
          <ImageWrapper src={logo} alt="logo"/>
          <HeaderTitle>React Shop</HeaderTitle>
          <NavLink to='/products' className = 'header-link' activeClassName='header-link-active'>Products</NavLink>
          <NavLink to='/admin' className = 'header-link' activeClassName='header-link-active'>Admin</NavLink>
        </HeaderWrapper>
    )
}

export default withRouter(Header);
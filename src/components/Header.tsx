import * as React from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import logo from '../../src/logo.svg';
import '../styles/Header.css';
import { HeaderWrapper, ImageWrapper, HeaderTitle } from '../styled-components/styled-components';
import { getSearchText } from '../util/search-utils';
import { useState, useEffect } from 'react';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';

const Header: React.FC<RouteComponentProps> = (props) => {
    const searchTxt = getSearchText(props);
    const [search, setSearch] = useState('');
    useEffect(() => {
        setSearch(searchTxt);
    })

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        const { target: { value }} = event;
        setSearch(value)
    }

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        e.preventDefault();
        if (e.key === 'Enter') {
            const newValue = (e.target as HTMLInputElement).value
            if (newValue !== search) {
                setSearch(newValue);
            }
            props.history.push(`/products?search=${search}`);
        }
    }
        
    return (
        <HeaderWrapper>
          <div className='search-container'>
                <input 
                    type='text'
                    value={search}
                    placeholder='search'      
                    onKeyDown={handleOnKeyDown}
                    onChange={handleOnChange}
                /> 
          </div>
          <ImageWrapper src={logo} alt="logo"/>
          <HeaderTitle>React Shop</HeaderTitle>
          <NavLink to='/products' className = 'header-link' activeClassName='header-link-active'>Products</NavLink>
          <NavLink to='/admin' className = 'header-link' activeClassName='header-link-active'>Admin</NavLink>
        </HeaderWrapper>
    )
}

export default withRouter(Header);
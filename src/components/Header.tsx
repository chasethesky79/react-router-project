import * as React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../src/logo.svg';
import '../styles/Header.css';
import { HeaderWrapper, ImageWrapper, HeaderTitle } from '../styled-components/styled-components';

export const Header: React.FC<{}> = () => {
    return (
        <HeaderWrapper>
          <ImageWrapper src={logo} alt="logo"/>
          <HeaderTitle>React Shop</HeaderTitle>
          <NavLink to='/products' className = 'header-link' activeClassName='header-link-active'>Products</NavLink>
          <NavLink to='/admin' className = 'header-link' activeClassName='header-link-active'>Admin</NavLink>
        </HeaderWrapper>
    )
}
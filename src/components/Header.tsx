import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/logo.svg';
import '../styles/Header.css';
import { HeaderWrapper, ImageWrapper, HeaderTitle } from '../styled-components/styled-components';

export const Header: React.FC<{}> = () => {
    return (
        <HeaderWrapper>
          <ImageWrapper src={logo} alt="logo"/>
          <HeaderTitle>React Shop</HeaderTitle>
          <Link to='/products' className='header-link'>Products</Link>
          <Link to='/admin' className='header-link'>Admin</Link>
        </HeaderWrapper>
    )
}
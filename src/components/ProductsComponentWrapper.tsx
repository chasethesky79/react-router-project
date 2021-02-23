import React from "react";
import ProductsPage from './ProductsPage';
import { RouteComponentProps } from 'react-router-dom';
import { getSearchText } from '../util/search-utils';

const ProductsComponentWrapper: React.FC<RouteComponentProps> = props => {
  const searchTxt = getSearchText(props);
    return (
        <ProductsPage dataSource='../../assets/data.json' search={searchTxt}/>            
    );
}

export default ProductsComponentWrapper;

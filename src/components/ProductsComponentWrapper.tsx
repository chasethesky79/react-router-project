import React from "react";
import ProductsPage from './ProductsPage';
import { RouteComponentProps } from 'react-router-dom';
import * as QueryString from "query-string"
import { MessageNotificationWrapper } from '../styled-components/styled-components';

const ProductsComponentWrapper: React.FunctionComponent<RouteComponentProps> = props => {
      const { location: { search }} = props;
      const queryParams = QueryString.parse(search);
      const searchTxt = queryParams.search as string;
      return (
          <ProductsPage dataSource='../../assets/data.json' search={searchTxt}/>            
      );
    }

export default ProductsComponentWrapper;
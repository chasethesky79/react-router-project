import { IProductComponentProps } from "../models/product-model";
import { Alert, PageContainer } from '../styled-components/styled-components';
import  NumberFormat from 'react-number-format';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link, Prompt } from 'react-router-dom';
import '../styles/Header.css';

const ProductComponent: React.FC<IProductComponentProps> = ({ product, loading, error, added }: IProductComponentProps) => {
   const [productState, setProductState] = useState({ product, loading, error, added });
   const handleAddClick = () => {
     setProductState({ ...productState, added: true })
   }
   const navAwayMessage = () => 'Are you sure you want to leave without buying this product?';
   return (
       <>
        {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert>}
        <PageContainer>
            <Prompt when={!productState.added} message={navAwayMessage}/>
           { product ? 
            <>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
              {!added && <p><Button variant='primary' onClick={handleAddClick}>Add To Basket</Button></p>}
            </> : <p>Product not found</p>
           }
        </PageContainer>
        <Link className='products-link' to={`/products`}>{'<<Back to products page>>'}</Link>
        </>
   )
}

export default ProductComponent;

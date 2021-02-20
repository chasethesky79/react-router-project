import { IProductComponentProps } from "../models/product-model";
import { Alert, PageContainer } from '../styled-components/styled-components';
import  NumberFormat from 'react-number-format';
import { useState } from 'react';

const ProductComponent: React.FC<IProductComponentProps> = ({ product, loading, error, added }: IProductComponentProps) => {
   const [initialState, setProduct] = useState({ product, loading, error, added });
   const handleAddClick = () => {
     setProduct({ ...initialState, added: true })
   }
   return (
       <>
        {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert>}
        <PageContainer>
           { product ? 
            <>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
              {!added && <p><button onClick={handleAddClick}/>Add To Basket</p>}
            </> : <p>Product not found</p>
           }
        </PageContainer>
        </>
   )
}

export default ProductComponent;

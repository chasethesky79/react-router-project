import { IProductsComponentProps } from "../models/product-model";
import { PageContainer, ProductListWrapper, ProductListItemWrapper, Alert, MessageNotificationWrapper } from '../styled-components/styled-components';
import { Link } from 'react-router-dom';
import { withProductsFetching } from './withProductsFetching';

const ProductsComponent: React.FC<IProductsComponentProps> = ({ data, loading, error }: IProductsComponentProps) => {
   return (
       <>
          {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert>}
        <PageContainer>
        { data.length > 0 ? 
        <>
            <p>
                Welcome to React shop where you can get all your tools for ReactJS
            </p>
            <ProductListWrapper>
                { data && data.map(product => <ProductListItemWrapper key={product.id}><Link to={`/products/${product.id}`}>{product.name}</Link></ProductListItemWrapper>)}
            </ProductListWrapper>
        </> : <MessageNotificationWrapper>No products match the search criteria</MessageNotificationWrapper>
        }
        </PageContainer>
        </>
   )
}

export default withProductsFetching(ProductsComponent);
import { IProductsComponentProps } from "../models/product-model";
import { PageContainer, ProductListWrapper, ProductListItemWrapper, Alert } from '../styled-components/styled-components';
import { withProductsFetching } from './withProductsFetching';

const ProductsComponent: React.FC<IProductsComponentProps> = ({ data, loading, error }: IProductsComponentProps) => {
   return (
       <>
          {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert>}
        <PageContainer>
            <p>
                Welcome to React shop where you can get all your tools for ReactJS
            </p>
            <ProductListWrapper>
                { data && data.map(product => <ProductListItemWrapper key={product.id}>{product.name}</ProductListItemWrapper>)}
            </ProductListWrapper>
        </PageContainer>
        </>
   )
}

export default withProductsFetching(ProductsComponent);
import { IProductComponentProps } from "../models/product-model";
import { Alert } from '../styled-components/styled-components';
import { withProductFetching } from './withProductFetching';

const ProductComponent: React.FC<IProductComponentProps> = ({ data, loading, error }: IProductComponentProps) => {
   return (
       <>
          {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert>}
        </>
   )
}

export default withProductFetching(ProductComponent);
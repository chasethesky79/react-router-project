export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
}

type IProducts = {
    products: IProduct[]
}

type IProductItem = {
    product: IProduct;
}

type IErrorInfo = {
    loading: boolean;
    error: string;
}

export type IProductsComponentProps = IProducts & IErrorInfo;

export type IProductComponentProps = IProductItem & IErrorInfo;

export type IProductDataFetchComponent = React.FC<IProductsComponentProps> | React.FC<IProductComponentProps>

export interface IDataSourceProps {
    dataSource: string;
}
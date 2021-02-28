import { RouteComponentProps } from "react-router-dom";

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
}

type IProducts = {
    data: IProduct[]
}

export type IProductInfo = {
    productId?: string;
    product?: IProduct;
    added?: boolean;
}

export type IErrorInfo = {
    loading: boolean;
    error: string;
}

export type IProductsComponentProps = IProducts & IErrorInfo;

export type IProductComponentProps = IProductInfo & IErrorInfo;

export type IProductDataFetchComponent = React.FC<IProductsComponentProps> | React.FC<IProductComponentProps>

export type IProductsSearchProps = {
    search: string
}
export type IDataSourceProps = {
    dataSource: string
}

export type IProductDetailsPageProps = RouteComponentProps<{ id: string }>

export type SearchFieldProps = {
    searchText: string;
    history: History
}
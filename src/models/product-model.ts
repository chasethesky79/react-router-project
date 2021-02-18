export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface IState {
    products: IProduct[]
}

export interface IProductsComponentProps {
    data: IProduct[],
    loading: boolean;
    error: string
}

export interface IDataSourceProps {
    dataSource: string;
}
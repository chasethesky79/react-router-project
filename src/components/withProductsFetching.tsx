import { useState, useEffect } from "react";
import { IDataSourceProps, IProductsComponentProps, IProductsSearchProps, IProduct } from '../models/product-model';

export const withProductsFetching = (WrappedComponent: React.FC<IProductsComponentProps>) => {
    return ({ dataSource, search }: IDataSourceProps & IProductsSearchProps) => {
        const initialProducts: IProductsComponentProps = {
            data: [],
            loading: true,
            error: ''
        }
        const [products, setProducts] = useState(initialProducts);
        useEffect(() => {
            async function fetchData() {
            try {
                const transactionsData = await fetch(dataSource);
                let data: IProduct[] = await transactionsData.json();
                data = search ? data.filter((item: IProduct) => item?.name?.toLowerCase().indexOf(search.toLowerCase()) > -1) : data;
                if (data) {
                    setProducts({...initialProducts, data, loading: false })
                }
            } catch(error) {
                const { message } = error;
                setProducts({...initialProducts, error: message })
            }
         } fetchData();     
         }, []);
         return (
             <WrappedComponent {...products}/>
         )
    }
}
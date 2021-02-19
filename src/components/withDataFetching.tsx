import { useState, useEffect } from "react";
import { IDataSourceProps, IProductsComponentProps } from '../models/product-model';

export const withDataFetching = (WrappedComponent: React.FC<IProductsComponentProps>) => {
    return ({ dataSource }: IDataSourceProps) => {
        const initialProducts: IProductsComponentProps = {
            products: [],
            loading: true,
            error: ''
        }
        const [products, setProducts] = useState(initialProducts);
        useEffect(() => {
            async function fetchData() {
            try {
                const transactionsData = await fetch(dataSource);
                const result = await transactionsData.json();
                if (result) {
                    setProducts({...initialProducts, products: result, loading: false })
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
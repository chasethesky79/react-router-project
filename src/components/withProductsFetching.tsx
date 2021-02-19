import { useState, useEffect } from "react";
import { IDataSourceProps, IProductsComponentProps } from '../models/product-model';

export const withProductsFetching = (WrappedComponent: React.FC<IProductsComponentProps>) => {
    return ({ dataSource }: IDataSourceProps) => {
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
                const data = await transactionsData.json();
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
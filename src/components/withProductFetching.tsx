import { useState, useEffect } from "react";
import { IDataSourceProps, IProduct, IProductComponentProps, IProductsComponentProps } from '../models/product-model';

export const withProductFetching = (WrappedComponent: React.FC<IProductComponentProps>) => {
    return ({ dataSource, productId }: IDataSourceProps) => {
        const initialState: IProductComponentProps = {
            data: {
                id: -1,
                name: '',
                description: '',
                price: -1
            },
            loading: true,
            error: ''
        }
        const [product, setProduct] = useState(initialState);
        useEffect(() => {
            async function fetchData() {
            try {
                const transactionsData = await fetch(dataSource);
                const data = (await transactionsData.json()).filter((item: IProduct) => item.id === Number(productId));
                console.log(`PRODUCT DETAILS ${JSON.stringify(data)}`);
                if (data) {
                    setProduct({ ...initialState, data, loading: false })
                }
            } catch(error) {
                const { message } = error;
                setProduct({ ...initialState, error: message })
            }
         } fetchData();     
         }, []);
         return (
             <WrappedComponent {...product}/>
         )
    }
}
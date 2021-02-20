import { IProductComponentProps, IProductDetailsPageProps, IProduct } from "../models/product-model";
import React, { useState, useEffect } from 'react'
import ProductDetailsPage from './ProductDetailsPage';

const ProductDetailsComponentWrapper: React.FC<IProductDetailsPageProps>  = ({ match: { params: { id: productId }} }: IProductDetailsPageProps) => {
  const dataSource = '../../assets/data.json';
  const initialState: IProductComponentProps = {
      product: { 
        id: -1,
        name: '',
        description: '',
        price: -1
      },
      error: '',
      loading: false,
      added: false
  }
  const [product, setProduct] = useState(initialState);
  useEffect(() => {
    async function fetchData() {
    try {
        const transactionsData = await fetch(dataSource);
        const data = await transactionsData.json();
        if (data) {
            const product = data.find(({ id }: IProduct) => id === Number(productId));
            setProduct({...initialState, ...{ product }})
        }
    } catch(error) {
        const { message } = error;
        setProduct({...initialState, error: message })
    }
 } fetchData();     
 }, []);
  return (
    <div>
      <ProductDetailsPage {...product} />
    </div>
  );
}

export default ProductDetailsComponentWrapper;
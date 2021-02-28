import { IProductComponentProps, IProductDetailsPageProps, IProduct } from "../models/product-model";
import React, { useState, useEffect } from 'react'
import ProductDetailsPage from './ProductDetailsPage';

const ProductDetailsComponentWrapper: React.FC<IProductDetailsPageProps>  = ({ match: { params: { id: productId }} }: IProductDetailsPageProps) => {
  const dataSource = '../../assets/data.json';
  const productState: IProductComponentProps = {
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
  const [product, setProductState] = useState(productState);
  useEffect(() => {
    async function fetchData() {
    try {
        const transactionsData = await fetch(dataSource);
        const data = await transactionsData.json();
        if (data) {
            const product = data.find(({ id }: IProduct) => id === Number(productId));
            setProductState({...productState, ...{ product }})
        }
    } catch(error) {
        const { message } = error;
        setProductState({...productState, error: message })
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
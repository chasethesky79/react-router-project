import React from "react";
import ProductDetailsPage from './ProductDetailsPage';

export default function ProductDetailsComponentWrapper() {
  return (
    <div>
      <ProductDetailsPage dataSource="../../assets/data.json" productId='1' />
    </div>
  );
}
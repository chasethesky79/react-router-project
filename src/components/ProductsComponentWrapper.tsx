import React from "react";
import ProductsPage from './ProductsPage';

export default function ProductsComponentWrapper() {
  return (
    <div>
      <ProductsPage dataSource="../../assets/data.json" />
    </div>
  );
}
// src/pages/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from './Product';
import ProductDetailView from '../components/ProductDetailView'; // ✅ import

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return <ProductDetailView product={product} />; // ✅ use component
}

export default ProductDetail;

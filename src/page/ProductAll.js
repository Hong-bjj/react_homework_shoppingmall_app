import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

export const ProductAll = () => {
  const [productList,setProductList] = useState([]);
  const [query,setQuery] =useSearchParams();
  const getProducts=async() => {
    let searchQuery = query.get("q") || "";

    let url = `http://localhost:3004/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(()=> {
    getProducts()
  },[query])
  return (
    <div>
      <Container>
        <Row>
        {productList.map((menu) => (
        <Col lg={3}>
          <ProductCard item={menu} />
        </Col>
        ))}
          </Row>
          </Container>
       </div>
  )
}

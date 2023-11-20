import React, { useState } from 'react'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


export const ProductDetail = () => {
  let{id}=useParams()
  const [product,setProduct]= useState(null);
  const getProductDetail=async()=>{
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(()=>{
        getProductDetail()
  },[])
  
  return(

    <Container>
      <Row>
        <Col className='product-img'>
        <img src={product?.img}></img>
        </Col>
        <Col>
        <div>{product?.title}</div>
        <div>{product?.price}</div> 
        <Button variant="secondary" size="lg">
        장바구니 추가
      </Button>
        
        </Col>
      </Row>

    </Container>
)
}

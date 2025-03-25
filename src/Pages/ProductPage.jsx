import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <Loading>Loading...</Loading>;

  return (
    <Container>
      <ImageContainer>
        <ProductImage src={product.image} alt={product.title} />
      </ImageContainer>
      <Details>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>${product.price}</Price>
        <Button>Add to Cart</Button>
      </Details>
    </Container>
  );
};

export default ProductPage;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  max-width: 800px;
  margin: auto;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ProductImage = styled.img`
  width: 200px;
  height: auto;
  object-fit: contain;
`;

const Details = styled.div`
  flex: 2;
  padding: 20px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #555;
  font-size: 16px;
  margin-bottom: 15px;
`;

const Price = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #e44d26;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background: #e44d26;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #c73719;
  }
`;

const Loading = styled.p`
  text-align: center;
  font-size: 18px;
  color: #333;
  padding: 50px;
`;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate(); // For navigation

  // Fetch products from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // Replace with your real API
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Filter products based on input
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    if (query.length > 0) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  // Navigate to product page on click
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <StyledWrapper>
      <div className="input-container">
        <input
          placeholder="Enter text"
          className="input-field"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />
        <label htmlFor="input-field" className="input-label">
          Enter text
        </label>
        <span className="input-highlight" />

        {/* Display filtered results */}
        {filteredProducts.length > 0 && (
          <ul className="dropdown">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="dropdown-item"
                onClick={() => handleProductClick(product.id)}
              >
                {product.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Input container */
  .input-container {
    position: relative;
    margin: 20px;
  }

  /* Input field */
  .input-field {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-bottom: 2px solid #ccc;
    outline: none;
    background-color: transparent;
  }

  /* Input label */
  .input-label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    color: rgba(204, 204, 204, 0);
    pointer-events: none;
    transition: all 0.3s ease;
  }

  /* Input highlight */
  .input-highlight {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background-color: #007bff;
    transition: all 0.3s ease;
  }

  /* Input field:focus styles */
  .input-field:focus + .input-label {
    top: -20px;
    font-size: 12px;
    color: #007bff;
  }

  .input-field:focus + .input-label + .input-highlight {
    width: 100%;
  }

  /* Dropdown styles */
  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    border: 1px solid #ccc;
    border-top: none;
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 200px;
    overflow-y: auto;
  }

  .dropdown-item {
    padding: 10px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .dropdown-item:hover {
    background: #f0f0f0;
  }
`;

export default Input;

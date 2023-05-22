import React, { useState, useEffect } from 'react';
import './App.css';



function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart">
      <h2 className='titolo'>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li className='container' key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.price}$</p>
            {item.title} - Quantity: {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SearchBar({ products, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredProducts);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
function Footer() {
  return (
    <nav>
      <ul className='copirtght'>
        <li>Terms&Condition</li>
        <li>Copirtght</li>
        <li>Rules</li>
        <li>FurtherInfo</li>
      </ul>
    </nav>

  )
}
function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://dummyjson.com/products');
      const productData = await response.json();
      const productList = productData.products; // Ottieni l'array di prodotti dal campo 'products' nel JSON
      setProducts(productList);
      setFilteredProducts(productList.slice(0, 15));
    }

    fetchProducts();
  }, []);

  function handleSearch(filteredProducts) {
    setFilteredProducts(filteredProducts);
  }

  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      const newItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  }

  function removeFromCart(itemId) {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  }

  return (
    <div className='app'>
      <div className="mainbox">
        <h1>My Store</h1>
        <div className='search-bar'>
          <SearchBar products={products} onSearch={handleSearch} />
        </div>

        <ul className='products'>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <h2>Product: {product.title}</h2>
              <img src={product.thumbnail} alt={product.title} />
              <p>Description: {product.description}</p>
              <p>Price: {product.price} $</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
        <Footer />


      </div>
      <Cart className='container' cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>


  );
}

export default App;




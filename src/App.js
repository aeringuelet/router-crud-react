import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Products from './components/Products';
import Product from './components/Product';
import Header from './components/Header';

function App() {
  const [ products, setProducts ] = useState([]);
  const [ refresh, setRefresh ] = useState(true);

  useEffect(() => {
    if(refresh) {
      const getFromAPI = async () => {
        let url = `http://localhost:4000/restaurant`;
  
        const result = await axios.get(url);
        
        setProducts(result.data);
      }
  
      getFromAPI();

      setRefresh(false);
    }
  }, [ refresh ])


  return (
    <Router>
      <Header />

      <main className="container mt-5">
        <Switch>
          <Route exact path="/add" 
            render={() => (
              <AddProduct setRefresh={setRefresh} />
            )} 
          />
          <Route exact path="/products" 
            render={() => (
              <Products products={products} />
            )} 
          />
          <Route exact path="/products/edit/:id" component={EditProduct} />
          <Route exact path="/products/:id" component={Product} />
        </Switch>
      </main>

    </Router>
  );
}

export default App;

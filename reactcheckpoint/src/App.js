import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import productData from './Product.js';
import Price from './Price.js';
import Name from './Name.js';
import Description from './Description.js';
import Image from './Image.js';


function App() {
  
  return (
    <div className="App">
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Name name={productData.name}/>
        <Image imageProduct={productData.image} />
        <Description descriptioneName={productData.descriptionName}/> 
        <Price pricevalue={productData.price}/>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;


import './App.css'
import ProductManagementApp, { Laptop } from './Components/Product'
import  { useState } from 'react';

function App() {
  const [laptops, setLaptops] = useState<Laptop>([]); // Assuming an empty array initially

  const handleAddLaptop = (laptop: Laptop) => {
    setLaptops((prevLaptops) => [...prevLaptops, laptop]);
  };

  return (
    <>
      <ProductManagementApp laptops={laptops} onAddLaptop={handleAddLaptop} />
    </>
  );
}

export default App;

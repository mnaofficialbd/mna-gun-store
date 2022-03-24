import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([])
  const handleAddToCart = (id) => {
    console.log(id);
  }
  // console.log(guns);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])
  // console.log(guns);
  return (
    <div>
      {/* <Navbar>
        {guns.map(gun => (
          <h1 key={gun.id}>{gun.name}</h1>
        ))}
      </Navbar> */}
      <Navbar />
      <div className='card-container'>
        {guns.map(gun => (
          <Card key={gun.id} gunData={gun} handleAddToCart={handleAddToCart} />
          // <h1 key={gun.id}>{gun.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;

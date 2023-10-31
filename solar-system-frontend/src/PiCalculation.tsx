import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PiCalculator() {
  const [precision, setPrecision] = useState(2); 
  const [piValue, setPiValue] = useState<number | null>(null);
  const [circumference, setCircumference] = useState<number | null>(null);

  // Function to fetch the Pi value from the server
  const fetchPiValue = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/pi?precision=${precision}`);
      setPiValue(Number(Number(response.data.pi).toFixed(precision)));
      setCircumference(Number(Number(response.data.circumference).toFixed(precision)));
    } catch (error) {
      console.error('Error fetching Pi value:', error);
      setPiValue(400);
    }
  };

  useEffect(() => {
    fetchPiValue();
  }, [precision]);

  return (
    <div>
      <h1>Sun Circumference Calculator</h1>
      <div>
        <label htmlFor="precision">Precision:</label>
        <input
          type="number"
          id="precision"
          value={precision}
          onChange={(e) => setPrecision(Number(e.target.value))}
        />
        <button onClick={fetchPiValue}>Calculate Pi</button>
      </div>
      <div>
        <p>Pi (to {precision} decimal places): {piValue}</p>
        <p>Circumference (to {precision} decimal places): {circumference}</p>
      </div>
    </div>
  );
}

export default PiCalculator;
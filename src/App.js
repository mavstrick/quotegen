import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState("");
  const [error, setError] = useState(null);

  // Fetch a random quote from the RapidAPI
  const fetchQuote = async () => {
    const options = {
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      params: {
        language_code: 'en'
      },
      headers: {
        'x-rapidapi-key': 'c4294403f0mshc119beaa46895bcp1ec888jsned724f5d3fbc',
        'x-rapidapi-host': 'quotes15.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setQuote(response.data.content)
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch quote once when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Dynamic Random Quote Generator</h1>

      {error ? (
        <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>
      ) : (
        <>
          <div style={{ fontStyle: 'italic', marginBottom: '10px' }}>"{quote.content}"</div>
          <div style={{ marginBottom: '20px' }}>- {quote.author}</div>
        </>
      )}
     <div style={{display:"flex", flexDirection:"column"}}>
  <button
    onClick={fetchQuote} // Fetch a new quote when the button is clicked
    style={{ padding: '10px 20px', fontSize: '16px' }}
  >
    Get New Quote
  </button>
  <p>
    {quote}
  </p>
</div>

    </div>
  );
}

export default App;
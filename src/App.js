import React, { useState } from 'react';

const quotes = [
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { quote: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
  { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { quote: "Get busy living or get busy dying.", author: "Stephen King" }
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Random Quote Generator</h1>
      <div style={{ fontStyle: 'italic', marginBottom: '10px' }}>"{quote.quote}"</div>
      <div style={{ marginBottom: '20px' }}>- {quote.author}</div>
      <button onClick={getRandomQuote} style={{ padding: '10px 20px', fontSize: '16px' }}>Get New Quote</button>
    </div>
  );
}

export default App;

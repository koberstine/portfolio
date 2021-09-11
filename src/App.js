import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentPage] = useState('About');

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;

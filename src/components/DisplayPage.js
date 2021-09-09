import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function DisplayPage() {
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default DisplayPage;

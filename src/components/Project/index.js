import React, { useState } from 'react';

function Project() {
  const [projects] = useState([
    {
      name: 'Redux Store',
      deployed: 'https://murmuring-brushlands-08289.herokuapp.com/',
      github: 'https://github.com/koberstine/redux-store/',
      used: 'Redux, MongoDB, Express.js, React.js, Node.js',
      screenshot: '../../../assets/images/screenshot1.jpg'
    },
    {
      name: 'Book Wishlist',
      deployed: 'https://pure-gorge-10833.herokuapp.com/',
      github: 'https://github.com/koberstine/book-wishlist/',
      used: 'GraphQL, MongoDB, Express.js, React.js, Node.js',
      screenshot: '../../../assets/images/screenshot2.jpg'
    },
    {
      name: 'Budget Tracker',
      deployed: 'https://limitless-inlet-80650.herokuapp.com/',
      github: 'https://github.com/koberstine/budget-tracker/',
      used: 'IndexedDB, Service Worker, Web Manifest',
      screenshot: '../../../assets/images/screenshot3.jpg'
    },
    {
      name: 'Share Thought',
      deployed: 'https://vast-shore-81150.herokuapp.com/',
      github: 'https://github.com/koberstine/share-thought/',
      used: 'MongoDB, Mongoose, IndexedDB',
      screenshot: '../../../assets/images/screenshot4.jpg'
    },
    {
      name: 'Note Taker',
      deployed: 'https://secure-tor-32394.herokuapp.com/',
      github: 'https://github.com/koberstine/note-taker/',
      used: 'Express.js, Node.js, RESTful APIs',
      screenshot: '../../../assets/images/screenshot5.jpg'
    },
    {
      name: 'Weather Dashboard',
      deployed: 'https://koberstine.github.io/weather-dashboard/',
      github: 'https://github.com/koberstine/weather-dashboard/',
      used: 'Fetch API, AJAX, jQuery, JavaScript',
      screenshot: '../../../assets/images/screenshot6.jpg'
    }
  ]);

  return (
    <div>
      <div>
        {projects.map((project, i) => (
          <><h3>{project.name}</h3>
            <h5>{project.used}</h5>
            <img
            key={i}
            src={require(`../../../assets/images/image${i + 1}.jpg`).default}
            alt={project.name}
            className="img-thumbnail mx-1" /></>
        ))}   
      </div>
      
    </div>
  )
};

export default Project;
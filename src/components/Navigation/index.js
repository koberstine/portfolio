import { React, useEffect } from 'react';

// Props are passed through our functional component.
function Navigation(props) {
  const tabs = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  useEffect(() => {
    const page = tabs.find(tab => window.location.hash.includes(tab.toLowerCase()))
    if (page) props.handlePageChange(page)
  }, [])

  return (
    <ul className="nav nav-tabs" style={{ listStyleType: "none", paddingLeft: 0, display: "flex", flexDirection: "row" }}>
      {tabs.map(tab => (
        <li className="nav-item" key={tab} style={{marginRight: 30}}>
          <a
            href={'#' + tab.toLowerCase()}
            
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
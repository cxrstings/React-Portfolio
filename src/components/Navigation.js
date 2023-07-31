import React, { useState } from 'react';
import styles from './Navigation.module.css';
import { FiMenu } from 'react-icons/fi'; 

function Navigation({ selectedSection, onNavigationClick }) {
  const [navVisible, setNavVisible] = useState(false); 

  const navigationLinks = [
    { id: 'about', title: 'About Me' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'contact', title: 'Contact' },
    { id: 'resume', title: 'Resume' },
  ];

  const handleLinkClick = (event, section) => {
    event.preventDefault();
    onNavigationClick(section);
    setNavVisible(false); 
  };

  return (
    <>
      <FiMenu className={styles.fiMenu} onClick={() => setNavVisible(!navVisible)} /> {/* Button to toggle navigation visibility */}
      {navVisible && (
        <aside className={`${styles.aside} ${navVisible ? styles.asideVisible : ''}`}>
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.id === 'contact' ? `mailto:cxrbinjxhns@gmail.com?subject=Website Contact` : `#${link.id}`}
                  className={selectedSection === link.id ? 'active' : ''}
                  onClick={link.id === 'contact' ? null : (event) => handleLinkClick(event, link.id)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
}

export default Navigation;
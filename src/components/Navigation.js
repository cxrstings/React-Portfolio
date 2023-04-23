import React from 'react';

function Navigation({ selectedSection, onNavigationClick }) {
  const navigationLinks = [
    { id: 'about', title: 'About Me' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'contact', title: 'Contact' },
    { id: 'resume', title: 'Resume' },
  ];

  const handleLinkClick = (event, section) => {
    event.preventDefault();
    onNavigationClick(section);
  };

  return (
    <nav>
      <ul>
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={selectedSection === link.id ? 'active' : ''}
              onClick={(event) => handleLinkClick(event, link.id)}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
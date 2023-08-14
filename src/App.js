import React, { useState } from 'react';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  const [selectedSection, setSelectedSection] = useState('about');

  const handleNavigationClick = (section) => {
    setSelectedSection(section);
  };

  let sectionComponent;

  switch (selectedSection) {
    case 'portfolio':
      sectionComponent = <Portfolio />;
      break;
    default:
      sectionComponent = <AboutMe />;
      break;
  }

  return (
    <div className={styles.container}>
      <Navigation selectedSection={selectedSection} onNavigationClick={handleNavigationClick} />
      <div className={styles.content}>
        {sectionComponent}
      </div>
      <Footer />
    </div>
  );
}

export default App;
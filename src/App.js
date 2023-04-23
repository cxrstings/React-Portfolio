import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

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
    case 'contact':
      sectionComponent = <Contact />;
      break;
    case 'resume':
      sectionComponent = <Resume />;
      break;
    default:
      sectionComponent = <AboutMe />;
      break;
  }

  return (
    <div>
      <Header />
      <Navigation selectedSection={selectedSection} onNavigationClick={handleNavigationClick} />
      {sectionComponent}
      <Footer />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import HomePage from '../Pages/HomePage.jsx';
import './index.css';
import Loading from './Components/LoadingComponent.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(loadingTimer);
  }, []);

  // Render loading component
  if (isLoading) {
    return <Loading />;
  }

  // Render home page
  return (
    <div className="poppins-regular">
      <HomePage />
    </div>
  );
}

export default App;

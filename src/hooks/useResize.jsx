import { useState, useEffect } from 'react';

const useResize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleResize = () => setScreenSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { screenSize };
};

export default useResize;

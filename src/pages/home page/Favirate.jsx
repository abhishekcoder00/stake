import React, {useEffect, useState} from 'react'
import Container from '../../Container'
import Fabirateslider from '../Fabirateslider'
import SearchInput from './SearchInput'
import FabirateTabe from './FabirateTabe';


const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="spinner"></div>
    <style jsx>{`
      .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        border-top: 4px solid #3498db;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);
export default function Favirate() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  
  return (
    <div>
      <Container>
       <Fabirateslider/> 
       <SearchInput/>
       <FabirateTabe/>
      </Container>
      
      
    </div>
  )
}

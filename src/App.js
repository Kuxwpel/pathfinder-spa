import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
   
  } from "react-router-dom";
  


import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


import Destinations from './pages/Destinations'
import Book from './pages/Book'
import Travel from './pages/Travel'
import View from './pages/View'
import About from './pages/About'
import Advertising from './pages/Advertising'
import Careers from './pages/Careers'
import Newsroom from './pages/Newsroom'
import Partnerships from './pages/Partnerships'
import { ClipLoader } from 'react-spinners';



function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, [])
  return (  
    <>
   {
    loading ?

    <ClipLoader
    size={150}
    color={"#F37A24"}
    loading={loading}
    />
   
    :
   
    <Router>
    <Header />
    
      <Routes>
              <Route render={() => <Navigate to="/" />} />
              <Route path="/" element={<Main/>} /> 
              <Route path="/pathfinder-spa" element={<Main/>} /> 
              <Route path="/home" element={<Main/>} /> 
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/book" element={<Book/>} />
              <Route path="/travel" element={<Travel/>} />
              <Route path="/view" element={<View/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/advertising" element={<Advertising/>} />
              <Route path="/careers" element={<Careers/>} />
              <Route path="/newsroom" element={<Newsroom/>} />
              <Route path="/partnerships" element={<Partnerships/>} />

      </Routes>
    
   <Footer />
   </Router>
}
    </>
  );
}

export default App;

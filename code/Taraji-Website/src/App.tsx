import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Trophies from './Components/Trophies';
import Latest from './Components/Latest';
import NextMatches from './Components/NextMatches';
import Footer from './Components/Footer';
import Post from './Components/Post'; // New page to show news
import Season from './Components/Season';

const App = () => {
  return (
    <Router>
      <div className="bg-[#0c1324] min-h-screen overlow-x-hidden  w-full">
        <div className="md:px-18">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <News />
                  <Latest />
                  <NextMatches />
                  { <Season/> }
             
                </>
              }
            />
            <Route path="/post/:id" element={<Post />} />

          </Routes>
          <Trophies/>
                      <Footer />

        </div>
      </div>
    </Router>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";

// Pages
import Home from "./pages/Home";
import TurfList from "./pages/TurfList";
import TurfDetail from "./pages/TurfDetail";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />

          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* All Turf List Page */}
            <Route path="/turfs" element={<TurfList />} />

            {/* Single Turf Detail Page */}
            <Route path="/turf/:id" element={<TurfDetail />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './compunents/Navbar';
import Footer from './compunents/Footer';
import MobileHome from './MobileHome';
import AntiMoney from './AntiMoney';
import GeneralFees from './GeneralFees';
import RiskDisclosure from './RiskDisclosure';
import WithdrawalPolicy from './WithdrawalPolicy';
import DemoAccount from './DemoAccount';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="bg-[#FAFAFA]">
        <Navbar />
        <Routes>
          <Route path="/" element={isMobile ? <MobileHome /> : <Home />} />
          <Route path="/anti-money" element={<AntiMoney />} />
          <Route path="/general-fees" element={<GeneralFees />} />
          <Route path="/risk-disclosure" element={<RiskDisclosure />} />
          <Route path="/withdrawal-policy" element={<WithdrawalPolicy />} />
          <Route path="/demo-account" element={<DemoAccount />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

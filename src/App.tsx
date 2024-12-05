import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import ImprovementAreas from './pages/ImprovementAreas';
import LearnMore from './pages/LearnMore';
import '@fontsource/inter';

export type Answer = {
  questionId: string;
  value: number;
  comment: string;
};

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [answers, setAnswers] = useState<Answer[]>([]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 font-inter">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/survey" 
            element={<Survey answers={answers} setAnswers={setAnswers} />} 
          />
          <Route 
            path="/results" 
            element={<Results answers={answers} />} 
          />
          <Route 
            path="/improvement-areas" 
            element={<ImprovementAreas answers={answers} />} 
          />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
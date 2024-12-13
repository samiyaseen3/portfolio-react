import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServiceSection from './components/ServiceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialSection from './components/TestimonialSection';
import './styles/main.css';
import HighlightSection from './components/HighlightSection';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
         <Route path="/services" element = {<ServiceSection />}/>
         <Route path="/skills" element={<SkillsSection/>}/>
         <Route path='/projects' element={<ProjectsSection/>}/>
         <Route path='/testimonial' element={<TestimonialSection/>}/>
         <Route path='/highlight' element={<HighlightSection/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Load nav
const Nav = React.lazy(() => import('./Components/Header/Nav'))
// Load about
const About = React.lazy(() => import('./Components/About'))
// Load skills
const Skills = React.lazy(() => import('./Components/Skills/SkillsMain'))
// Load experience
const Jobs = React.lazy(() => import('./Components/Experience/ExperienceMain'))
// Load education
const Education = React.lazy(() => import('./Components/Education/EducationMain'))
// Load portfolio
const Portfolio = React.lazy(() => import('./Components/Portfolio/PortfolioMain'))
// Load footer
const Footer = React.lazy(() => import('./Components/Footer'))
// Load Project image pages
const BmtLogoPage = React.lazy(() => import('./Components/Portfolio/ProjectPages/BmtLogoPage'))
const BackTo80Page = React.lazy(() => import('./Components/Portfolio/ProjectPages/BackTo80Page'))
const SpFlyerPage = React.lazy(() => import('./Components/Portfolio/ProjectPages/SpFlyerPage'))
const May4thPage = React.lazy(() => import('./Components/Portfolio/ProjectPages/May4thPage'))
const BmtEmailPage = React.lazy(() => import('./Components/Portfolio/ProjectPages/BmtEmailPage'))
const TruColorsBrochurePage = React.lazy(() => import('./Components/Portfolio/ProjectPages/TruColorsBrochurePage'))
const JomoFadeoutPage = React.lazy(() => import('./Components/Portfolio/ProjectPages/JomoFadeoutPage'))
const AppSlabTimberOnePage = React.lazy(() => import('./Components/Portfolio/ProjectPages/AppSlabTimberOnePage'))
const AppSlabTimberTwoPage = React.lazy(() => import('./Components/Portfolio/ProjectPages/AppSlabTimberTwoPage'))
const IlmBrewPage = React.lazy(() => import('./Components/Portfolio/ProjectPages/IlmBrewPage'))

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Nav />
              <About />
              <Skills />
              <Jobs />
              <Education />
              <Portfolio />
            </Suspense>
          }
        />
        <Route
          path="bmt-micro-logo"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BmtLogoPage />
            </Suspense>
          }
        />
        <Route
          path="back-to-80-flyer"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BackTo80Page />
            </Suspense>
          }
        />
        <Route
          path="sp-flyer"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SpFlyerPage />
            </Suspense>
          }
        />
        <Route
          path="may-4th-flyer"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <May4thPage />
            </Suspense>
          }
        />
        <Route
          path="bmt-micro-email"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BmtEmailPage />
            </Suspense>
          }
        />
        <Route
          path="tru-colors-brochure"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <TruColorsBrochurePage />
            </Suspense>
          }
        />
        <Route
          path="jomo-fadeout"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <JomoFadeoutPage />
            </Suspense>
          }
        />
        <Route
          path="appalachian-slab-timber"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AppSlabTimberOnePage />
            </Suspense>
          }
        />
        <Route
          path="appalachian-slab-timber-logo"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AppSlabTimberTwoPage />
            </Suspense>
          }
        />
        <Route
          path="wilmington-brew"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <IlmBrewPage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

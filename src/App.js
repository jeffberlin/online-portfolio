import React, { Suspense, useState, useEffect } from 'react';
import './css/App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Load nav
const Nav = React.lazy(() => import('./Components/Header/Nav'))
// Load about
// const About = React.lazy(() => import('./Components/About'))
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
// Load Error
const ErrorPage = React.lazy(() => import('./Components/ErrorPage'))
// Load ScrollToTop
const ScrollTop = React.lazy(() => import('./Components/ScrollTop'))
// Load Back button
const BackButton = React.lazy(() => import('./Components/BackButton'))

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div className="App">
      <div
        className={ `${transitionStage}` }
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Nav />
                {/* <About /> */}
                <Portfolio />
                <Skills />
                <Jobs />
                <Education />
                <ScrollTop />
              </Suspense>
            }
          />
          <Route
            path="bmt-micro-logo"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BackButton />
                <BmtLogoPage />
              </Suspense>
            }
          />
          <Route
            path="back-to-80-flyer"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BackButton />
                <BackTo80Page />
              </Suspense>
            }
          />
          <Route
            path="sp-flyer"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BackButton />
                <SpFlyerPage />
              </Suspense>
            }
          />
          <Route
            path="may-4th-flyer"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BackButton />
                <May4thPage />
              </Suspense>
            }
          />
          <Route
            path="bmt-micro-email"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BackButton />
                <BmtEmailPage />
              </Suspense>
            }
          />
          <Route
            path="tru-colors-brochure"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BackButton />
                <TruColorsBrochurePage />
              </Suspense>
            }
          />
          <Route
            path="jomo-fadeout"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BackButton />
                <JomoFadeoutPage />
              </Suspense>
            }
          />
          <Route
            path="appalachian-slab-timber"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BackButton />
                <AppSlabTimberOnePage />
              </Suspense>
            }
          />
          <Route
            path="appalachian-slab-timber-logo"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BackButton />
                <AppSlabTimberTwoPage />
              </Suspense>
            }
          />
          <Route
            path="wilmington-brew"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BackButton />
                <IlmBrewPage />
              </Suspense>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;

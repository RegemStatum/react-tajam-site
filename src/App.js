import React from "react";
//HEADER & FOOTER
import Header from "./components/page/header/Header";
import Footer from "./components/page/footer/Footer";
//REACT_ROUTER
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//PAGES
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExpertisePage from "./pages/ExpertisePage";
import TeamsPage from "./pages/TeamsPage";
import WorksPage from "./pages/WorksPage";
import PeopleSayPage from "./pages/PeopleSayPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
//CONTEXT
import { AppProvider } from "./context";
//SCSS
import "./assets/scss/index.scss";

function App() {
  return (
    <AppProvider>
      <Router>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/expertise" element={<ExpertisePage />}></Route>
            <Route path="/teams" element={<TeamsPage />}></Route>
            <Route path="/works" element={<WorksPage />}></Route>
            <Route path="/people-say" element={<PeopleSayPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
          <Footer />
        </>
      </Router>
    </AppProvider>
  );
}

export default App;

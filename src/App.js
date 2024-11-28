import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HomePage/Hero";
import InfoCards from "./components/HomePage/InfoCards";
import AboutSection from "./components/HomePage/AboutSection";
import Timeline from "./components/HomePage/Timeline";
import Committee from "./components/Committee";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import Speakers from "./components/Speakers";
import CommitteeMemberDetails from "./components/CommitteeMemberDetails";
import CallForPapers from "./components/CallForPapers";
import Tracks from "./components/Tracks";
import Registration from "./components/Registration";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCommitteeCategory, setSelectedCommitteeCategory] =
    useState(null);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setSelectedCommitteeCategory(null);
  };

  const handleCommitteeSelection = (category) => {
    setSelectedCommitteeCategory(category);
  };

  const handleBackToCommittees = () => {
    setSelectedCommitteeCategory(null);
  };

  return (
    <div className="app">
      <Navbar onNavigate={handleNavigation} />
      {currentPage === "home" ? (
        <>
          <Hero />
          <InfoCards />
          <AboutSection />
          <Timeline />
        </>
      ) : currentPage === "about" ? (
        <AboutPage />
      ) : currentPage === "committee" ? (
        selectedCommitteeCategory ? (
          <CommitteeMemberDetails
            category={selectedCommitteeCategory}
            onBack={handleBackToCommittees}
          />
        ) : (
          <Committee onSelectCategory={handleCommitteeSelection} />
        )
      ) : currentPage === "speakers" ? (
        <Speakers />
      ) : currentPage === "call-for-papers" ? (
        <CallForPapers />
      ) : currentPage === "tracks" ? (
        <Tracks />
      ) : currentPage === "registration" ? (
        <Registration />
      ) : currentPage === "contact-us" ? (
        <ContactUs />
      ) : null}
      <Footer />
    </div>
  );
}

export default App;

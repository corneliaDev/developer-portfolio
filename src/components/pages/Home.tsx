import HeroSection from "../sections/HeroSection";
import CookieConsent from "react-cookie-consent";
import ContactContainer from "../layout/ContactContainer";
import Container from "../layout/Container";
import Sections from "../layout/Sections";
import AboutMeSection from "../sections/AboutMeSection";
import BackgroundSection from "../layout/BackgroundImage";
import ExperienceSection from "../sections/ExperienceSection";

import ProjectSection from "../sections/ProjectSection";
import Header from "../layout/Header";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Container>
        <Header />
        <Sections>
          <HeroSection />
          <ExperienceSection />
          <AboutMeSection />
          <ProjectSection />
        </Sections>
        <ContactContainer />
        <BackgroundSection />
      </Container>
      <CookieConsent
        location="bottom"
        buttonText="Akzeptieren"
        declineButtonText="Ablehnen"
        enableDeclineButton
        cookieName="siteCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        declineButtonStyle={{ fontSize: "13px" }}
        expires={150}
      >
        Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu
        verbessern.{" "}
        <a
          href="/datenschutz"
          style={{ color: "#ffffff", textDecoration: "underline" }}
        >
          Mehr erfahren
        </a>
      </CookieConsent>
    </div>
  );
}

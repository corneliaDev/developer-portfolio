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
import Link from "../ui/Link";

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
        style={{ background: "#0BBDEA" }}
        buttonStyle={{ color: "#151515", fontSize: "14px" }}
        declineButtonStyle={{ fontSize: "14px" }}
        expires={150}
      >
        Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu
        verbessern.{" "}
        <Link to="/datenschutz" className="text-small">
          Datenschutz
        </Link>
      </CookieConsent>
    </div>
  );
}

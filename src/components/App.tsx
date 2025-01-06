import ApplicationPhoto from "./ApplicationPhoto";
import Contact from "./Contact";
import Container from "./Container";
import ExperienceList from "./ExperienceList";
import Header from "./Header";
import LogoSection from "./LogoSection";
import ProjectsList from "./ProjectsList";

function App() {
  return (
    <div className="text-white font-spaceGrotesk flex justify-center">
      <Container>
        <LogoSection />
        <ApplicationPhoto />
        <Header />
        <ExperienceList />
        <ProjectsList />
        <Contact />

        {/*  <ReadProjects /> */}
      </Container>
    </div>
  );
}

export default App;

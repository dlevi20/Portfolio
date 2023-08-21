import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects"
import Contact from "./components/Contact";

function App() {

  const { t } = useTranslation()

  return (
    <div>
      <Navbar />
      <MainPage />
      <div className="projects">
        <Projects />
      </div>
      <Contact />
    </div>
  );
}

export default App;

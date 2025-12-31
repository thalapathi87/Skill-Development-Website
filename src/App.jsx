import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/nav";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import HtmlTutorial from "./pages/Frontend/Html/HtmlTutorial";
import CssTutorial from "./pages/Frontend/CSS/CssTutorial";
import JsTutorial from "./pages/Frontend/JavaScript/JsTutorial"
import ReactTutorial from "./pages/Frontend/react/ReactTutorial";
import JavaTutorial from "./pages/backend/Java/JavaTutorial";
import SqlIntro from "./pages/backend/mysql/SqlTutorial";
import ContactPage from "./pages/ContextPage";
import SpringBootTutorial from "./pages/backend/SpringBoot/SpringBootTutorial";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home/> } />
     <Route path="/Roadmap" element={<Roadmap/>}/>
     <Route path="/html" element={<HtmlTutorial />} />
      <Route path="/css" element={<CssTutorial />} />
      <Route path="/JavaScript" element={<JsTutorial />} />
      <Route path="/React" element={<ReactTutorial />} />
      <Route path="/Java" element={<JavaTutorial />} />
      <Route path="/sql" element={<SqlIntro/>} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/springboot" element={< SpringBootTutorial/>} />

      </Routes>
      
    
    
    </BrowserRouter>
  );
  
}

export default App;

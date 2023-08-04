import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ResumeCreator from "./pages/resumeCreator";
import Resumes from "./pages/resumes";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<ResumeCreator />} />
        <Route path="/resumes" element={<Resumes />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

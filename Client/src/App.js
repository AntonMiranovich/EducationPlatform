import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import HomePage from "./pages/HomePage/HomePage";
import ListCourses from "./pages/ListCourses/ListCourses";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/auth" element={<AuthorizationPage />}></Route>
      <Route path="/reg" element={<RegistrationPage />}></Route>
      <Route path="/listcourses" element={<ListCourses />}></Route>
    </Routes>
  );
}

export default App;

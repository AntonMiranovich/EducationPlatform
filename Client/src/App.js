import "./App.css";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <div>
      <HomePage />
      <AuthorizationPage />
      <RegistrationPage />
      <CoursesPage />
    </div>
  );
}

export default App;

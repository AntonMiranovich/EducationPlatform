import "./App.css";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <div>
      <HomePage />
      <AuthorizationPage />
      <RegistrationPage />
    </div>
  );
}

export default App;

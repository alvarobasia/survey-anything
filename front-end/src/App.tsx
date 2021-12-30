import { Route, Routes } from "react-router-dom";
import SurveyCard from "./components/SurveyCard";
import SurveyContainer from "./components/SurveyContainer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewSurvey from "./pages/NewSurvey";
import Register from "./pages/Register";
import Survey from "./pages/Survey";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route
        path="home"
        element={
          <Home>
            <SurveyContainer />
          </Home>
        }
      />

      <Route
        path="surveys"
        element={
          <Home>
            <Survey />
          </Home>
        }
      />

      <Route
        path="surveys/new"
        element={
          <Home>
            <NewSurvey />
          </Home>
        }
      />
    </Routes>
  );
};

export default App;

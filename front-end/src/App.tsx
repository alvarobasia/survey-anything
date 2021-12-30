import { Route, Routes } from "react-router-dom";
import SurveyCard from "./components/SurveyCard";
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              <SurveyCard />
              <SurveyCard />
              <SurveyCard />
              <SurveyCard />
              <SurveyCard />
              <SurveyCard />
              <SurveyCard />
              <SurveyCard />
            </div>
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

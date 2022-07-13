import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Navigation from "./components/layout/navigation/Navigation/Navigation.component";
import HomePage from "./views/Home/HomePage/HomePage.component";
import ExerciseDetailPage from "./views/ExerciseDetail/ExerciseDetailPage/ExerciseDetailPage.component";

function App() {
  return (
    <Box width="400px">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercise/:id" element={<ExerciseDetailPage />} />
      </Routes>
    </Box>
  );
}

export default App;

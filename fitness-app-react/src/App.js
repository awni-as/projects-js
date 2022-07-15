import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Navigation from "./components/layout/navigation/Navigation/Navigation.component";
import Footer from "./components/layout/footer/Footer.component";
import HomePage from "./views/Home/HomePage/HomePage.component";
import ExerciseDetailPage from "./views/ExerciseDetail/ExerciseDetailPage/ExerciseDetailPage.component";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercise/:id" element={<ExerciseDetailPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

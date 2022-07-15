import React from "react";

import { Box, Typography } from "@mui/material";

import HeroBanner from "../HeroBanner/HeroBanner.component.jsx";
import SearchExercises from "../../../components/UI/SearchExercises/SearchExercises.component.jsx";
import Exercises from "../Exercises/Exercises.component.jsx";

const HomePage = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default HomePage;

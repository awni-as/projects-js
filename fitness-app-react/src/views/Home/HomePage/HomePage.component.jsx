import React, { useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";

import HeroBanner from "../HeroBanner/HeroBanner.component.jsx";
import SearchExercises from "../../../components/UI/SearchExercises/SearchExercises.component.jsx";
import Exercises from "../Exercises/Exercises.component.jsx";

import { exerciseOptions, fetchData } from "../../../utils/fetchData";

const HomePage = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [bodyParts, setBodyParts] = useState([]);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async (search) => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setExercises(searchedExercises);
    }
  };

  return (
    <Box>
      <HeroBanner />
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        mt="37px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        bodyParts={bodyParts}
        setBodyPart={setBodyPart}
        handleSearch={handleSearch}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default HomePage;

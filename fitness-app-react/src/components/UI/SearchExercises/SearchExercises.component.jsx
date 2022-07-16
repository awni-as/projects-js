import React, { useState, useEffect } from "react";

import "./SearchExercises.styles.css";
import { Box, Button, Stack, TextField } from "@mui/material";
import HorizontalScrollbar from "../HorizontalScrollbar/HorizontalScrollbar.component";

function SearchExercises(props) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    props.handleSearch(search);
    setSearch("");
  };

  return (
    <Stack alignItems="center" justifyContent="center" p="20px">
      <Box position="relative">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "6px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="56px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises..."
          type="text"
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }} mt="37px">
        <HorizontalScrollbar
          data={props.bodyParts}
          bodyPart={props.bodyPart}
          setBodyPart={props.setBodyPart}
        />
      </Box>
    </Stack>
  );
}

export default SearchExercises;

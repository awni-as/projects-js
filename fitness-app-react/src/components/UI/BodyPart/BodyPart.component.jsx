import React from "react";
import { Stack, Typography } from "@mui/material";
import "./BodyPart.styles.css";

import Icon from "../../../assets/icons/gym.png";

function BodyPart(props) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: props.bodyPart === props.item ? "4px solid #ff2625" : "",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        props.setBodyPart(props.item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {props.item}
      </Typography>
    </Stack>
  );
}

export default BodyPart;

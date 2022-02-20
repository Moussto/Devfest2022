import { Typography } from "@mui/material";
import React from "react";
import "./hero.scss";

export const Hero: React.FC<{ background?: string; title: string }> = ({
  background,
  title,
}) => {
  const backgroundImage = background
    ? require(`../../../images/backgrounds/${background}`).default
    : undefined;
  return (
    <div
      className="hero"
      style={{
        background: "linear-gradient(var(--secondary), 20%, var(--ternary))",
      }}
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content">
        <Typography variant="h1" color="primary">
          {title}
        </Typography>
      </div>
    </div>
  );
};

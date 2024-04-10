"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material";
import { ReactNodeLike } from "prop-types";

const Provider = ({ children }: { children: ReactNodeLike }) => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};

export default Provider;

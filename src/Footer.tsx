// src/components/Footer.tsx

import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backgroundColor: "#000000", // added a subtle background color for clarity
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
                999 Study Inn, Walnut Gardens, Exeter, UK EX4 4DH
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
                987-654-3210
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
                <a href="http://exech.co.uk" target="_blank" rel="noreferrer">http://exech.co.uk</a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

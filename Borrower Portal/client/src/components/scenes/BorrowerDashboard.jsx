import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Copyright from "../reusable/Copyright";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

const mdTheme = createTheme();

const BorrowerDashboard = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <h1>Loan Status</h1>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <h1>Misc.</h1>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <h1>Documents Needed</h1>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <h1>Signatures needed</h1>
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default BorrowerDashboard;

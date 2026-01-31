import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export default function Action() {
  const action_data = `A regional equipment rental company was managing operations through spreadsheets and manual approvals. Within 60 days, we implemented a Salesforce-powered solution that reduced approval time by 80% and improved billing accuracy. Simple. Transparent. Effective.`;
  return (
    <Box
      sx={{
        backgroundColor: "#3BAFDA0A",
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ paddingTop: "20px" }}>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#2E2E2E",
              textAlign: "center",
            }}
          >
            Purpose in Action
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#6B7280",
              fontSize: "16px",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            Our belief in simplicity and integrity drives every success story.
            Here's one that defines us.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#0B1F33",
            padding: "20px",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{ fontStyle: "italic", color: "white", fontWeight: "500" }}
          >
            {action_data}
          </Typography>

          <Typography
            sx={{
              marginTop: "20px",
              color: "white",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            This is what we mean when we say we simplify complexity.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

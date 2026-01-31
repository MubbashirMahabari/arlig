import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import globalMap from "../../../public/assets/about/global_map.png";

export default function Global() {
  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
            padding: "10px 15px",
            backgroundColor: "#E0E0E0",
            borderRadius: "30px",
            border: "#E8E8E8 solid 1px",
            display: "inline-block",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>Global Presence</Typography>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography sx={{ fontSize: "40px", fontWeight: "700" }}>
            Local Heart, Global Reach
          </Typography>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", color: "#6B7280" }}
          >
            From our offices in India and the UAE, and partnerships across the
            USA, we deliver Salesforce excellence that blends local
            understanding with global standards.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: "90%", marginTop: "40px" }}>
          <Image
            src={globalMap}
            alt="Hero"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

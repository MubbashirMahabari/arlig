import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Grid, Button, Link } from "@mui/material";
import handShake from "../../../public/assets/about/handshake.jpg";

export default function Promise() {
  return (
    <Box
      sx={{
        marginTop: "30px",
        paddingBottom: "40px",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: "#00336680",
            backgroundImage: `
      linear-gradient(rgba(0, 51, 102, 0.5), rgba(0, 51, 102, 0.5)),
      url(${handShake.src})
    `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px 0px",
          }}
        >
          <Box sx={{ paddingTop: "0px" }}>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "700",
                color: "#fff",
                textAlign: "center",
              }}
            >
              The Arlig Promise
            </Typography>
          </Box>

          <Box sx={{ marginTop: "20px" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "18px",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              "At Arlig Technologies, we don't just deliver Salesforce solutions
              — we deliver confidence,
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "18px",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              clarity, and commitment".
            </Typography>
          </Box>

          <Box sx={{ marginTop: "20px" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              — The Arlig Team
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

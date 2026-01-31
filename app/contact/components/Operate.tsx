import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import worldImage from "../../../public/assets/contact/world_image.png";

export default function Operate() {
  return (
    <Box sx={{ padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box sx={{ height: { xs: "100%", md: "300px" } }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ height: "100%" }}
          >
            <Grid size={{ xs: 12, sm: 4, md: 6 }} sx={{ height: "100%" }}>
              <Box>
                <Typography
                  sx={{ fontSize: "40px", fontWeight: "700", color: "#2E2E2E" }}
                >
                  Where We Operate
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "16px", marginTop: "10px" }}
                >
                  Our global presence spans across key business hubs, ensuring
                  we can support your Salesforce initiatives wherever your
                  organization operates.
                </Typography>
              </Box>
              <Box sx={{ marginTop: "30px" }}>
                <ul
                  style={{
                    paddingLeft: "20px",
                    margin: 0,
                    listStyle: "inherit",
                    color: "#4B5563",
                    fontSize: "14px",
                    lineHeight: "40px",
                  }}
                >
                  <li>United Arab Emirates – Primary Operations Hub</li>
                  <li>India – Development & Support Center</li>
                  <li>Europe – Strategic Partnerships</li>
                </ul>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 6 }} sx={{ height: "100%" }}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <Image
                  src={worldImage}
                  alt="contact"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    height: "100%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

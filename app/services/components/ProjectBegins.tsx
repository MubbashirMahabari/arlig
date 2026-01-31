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
import projectBegins from "../../../public/assets/services/project_begins.jpg";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import RadioIcon from "@mui/icons-material/Radio";
import LoopIcon from "@mui/icons-material/Loop";

export default function ProjectBegins() {
  return (
    <Box sx={{ padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box sx={{ height: { xs: "100%", md: "100%" } }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{}}
          >
            <Grid size={{ xs: 12, sm: 4, md: 6 }} sx={{}}>
              <Box>
                <Typography
                  sx={{ fontSize: "40px", fontWeight: "700", color: "#2E2E2E" }}
                >
                  Salesforce Consulting — Where Every Project Begins
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "16px", marginTop: "10px" }}
                >
                  Every successful Salesforce journey starts with clarity. We
                  work closely with you to assess your processes, identify
                  opportunities, and define a Salesforce roadmap aligned with
                  your business vision.
                </Typography>
              </Box>
              <Box sx={{ marginTop: "30px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    marginBottom: "8px",
                  }}
                >
                  <Box>
                    <ElectricalServicesIcon />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#0B1F33",
                    }}
                  >
                    Assess Processes
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    marginBottom: "8px",
                  }}
                >
                  <Box>
                    <RadioIcon />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#0B1F33",
                    }}
                  >
                    Design Solutions
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box>
                    <LoopIcon />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#0B1F33",
                    }}
                  >
                    Set Roadmaps
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ marginTop: "40px" }}>
                <Typography
                  sx={{ fontSize: "20px", fontWeight: "700", color: "#0B1F33" }}
                >
                  A well-defined Salesforce strategy that aligns business vision
                  with execution reality.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 6 }} sx={{}}>
              <Box sx={{ width: "100%", height: { xs: "100%", md: "450px" } }}>
                <Image
                  src={projectBegins}
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

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
import innovationImage from "../../../public/assets/services/innovation.jpg";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import RadioIcon from "@mui/icons-material/Radio";
import LoopIcon from "@mui/icons-material/Loop";

export default function Innovation() {
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
                  Integration & Automation Connecting the Dots Across Systems
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{ color: "#6B7280", fontSize: "16px", marginTop: "10px" }}
                >
                  Your business doesn't run on one system — and neither should
                  your data. We connect Salesforce with your critical tools for
                  a unified experience.
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
                    API-based integrations using MuleSoft, REST, and Middleware
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
                    Automated workflows via Flow and Einstein AI
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
                    Real-time data sync between CRM, ERP, and Finance
                  </Typography>
                </Box>
              </Box>

              {/* Buttons */}
              <Box
                sx={{
                  display: { xs: "block", md: "flex" },
                  marginTop: "30px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#0B1F33",
                    padding: "2px",
                    borderRadius: "50px",
                    border: "#0B1F33 3px solid",
                    marginRight: { xs: "0px", md: "15px" },
                    marginBottom: { xs: "15px", md: "0px" },
                    textAlign: "center",
                    alignContent: "center",
                    width: "100%",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Link href='/contact' style={{ textDecoration: 'none' }}>
                    <Button
                      sx={{
                        textTransform: "none",
                        color: "white",
                        textAlign: "center",
                        width: "100%",
                        alignContent: "center",
                      }}
                    >
                      <Typography>Talk to a Salesforce Expert</Typography>
                    </Button>
                  </Link>
                </Box>

                <Box
                  sx={{
                    backgroundColor: "white",
                    padding: "2px",
                    borderRadius: "50px",
                    border: "#1F4ED8 2px solid",
                    textAlign: "center",
                    width: "100%",
                    alignContent: "center",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 10px 30px rgba(31, 78, 216, 0.2)",
                    },
                  }}
                >
                  <Link href='/blog' style={{ textDecoration: 'none' }} >
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#1F4ED8",
                      textAlign: "center",
                      width: "100%",
                      alignContent: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: "500" }}>
                      Explore Case Studies
                    </Typography>
                  </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 6 }} sx={{}}>
              <Box sx={{ width: "100%", height: { xs: "100%", md: "450px" } }}>
                <Image
                  src={innovationImage}
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

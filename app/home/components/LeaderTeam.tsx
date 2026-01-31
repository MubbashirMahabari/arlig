import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";
import Image from "next/image";
import icon_1 from "../../../public/assets/profile/profile_1.png";
import icon_2 from "../../../public/assets/expertise/implementation.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function LeaderTeam() {
  const team_data = [
    {
      id: 1,
      img: icon_1,
      name: "Sayyid Abrar",
      role: "Salesforce Practice Head",
    },
    {
      id: 2,
      img: icon_1,
      name: "Sayyid Abrar",
      role: "Salesforce Practice Head",
    },
  ];
  return (
    <Box
      className=""
      sx={{ backgroundColor: "#3BAFDA0A", paddingBottom: "40px" }}
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
            Meet Our Leadership Team
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent="center"
            sx={{ padding: { xs: "20px", md: "40px" } }}
          >
            {team_data.map((item, i) => (
              <Grid
                key={i}
                size={{ xs: 12, sm: 4, md: 3 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: { xs: "100%", md: "300px" },
                    padding: "40px 10px",
                    transition: "all 0.3s ease",
                    borderRadius: "15px",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: 160,
                      height: 160,
                      margin: "0 auto 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* blurred glow */}
                    <Box
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        background: "rgba(0, 102, 255, 0.35)",
                        filter: "blur(14px)",
                        zIndex: 0,
                      }}
                    />

                    {/* solid ring */}
                    <Box
                      sx={{
                        position: "relative",
                        width: 140,
                        height: 140,
                        borderRadius: "50%",
                        border: "6px solid #0070f3",
                        overflow: "hidden",
                        zIndex: 1,
                        cursor: "pointer",
                        "& img": {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          filter: "grayscale(100%)",
                          transition: "all 0.4s ease",
                        },
                        "&:hover img": {
                          filter: "grayscale(0%)",
                        },
                      }}
                    >
                      <Image src={item.img} alt={item.name} />
                    </Box>
                  </Box>

                  <Box
                    className=""
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      className=""
                      sx={{
                        color: "#1F4ED8",
                        fontWeight: "700",
                        fontSize: "24px",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#6B7280",
                        fontWeight: "500",
                        fontSize: "14px",
                      }}
                    >
                      {item.role}
                    </Typography>

                    <Box
                      sx={{
                        padding: "10px",
                        borderRadius: "80%",
                        backgroundColor: "#1F4ED8",
                        marginTop: { xs: "10px", md: "20px" },
                        width: "50px",
                      }}
                    >
                      <LinkedInIcon sx={{ color: "#fff", fontSize: "30px" }} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

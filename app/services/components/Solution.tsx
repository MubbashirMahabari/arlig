import React from "react";
import Image from "next/image";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import icon_1 from "../../../public/assets/blogs/blog_1.jpg";
import icon_2 from "../../../public/assets/blogs/blog_2.jpg";
import icon_3 from "../../../public/assets/blogs/blog_3.jpg";
import EastIcon from "@mui/icons-material/East";

export default function Solution() {
  const solution_data = [
    {
      id: 1,
      img: icon_1,
      title: "Heavy Equipment Rentals",
      desc: "Unified visibility from enquiry to invoice.",
    },
    {
      id: 2,
      img: icon_2,
      title: "Media & Marketing",
      desc: "Real-time analytics and campaign clarity.",
    },
    {
      id: 3,
      img: icon_3,
      title: "Manufacturing",
      desc: "Dealer and distributor performance automation.",
    },
  ];
  return (
    <Box
      sx={{
        padding: "40px 0",
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
            Industry Solutions - Proven
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#2E2E2E",
              textAlign: "center",
            }}
          >
            Impact Across Sectors
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: { xs: "100%", sm: "100%", md: "1000px" },
            margin: "0 auto",
            marginTop: "16px",
          }}
        >
          <Typography sx={{ color: "#6B7280", fontSize: "16px" }}>
            Every industry faces unique challenges. Our mission is to simplify
            each one with Salesforce solutions that create real impact.
          </Typography>
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {solution_data.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
                <Box
                  sx={{
                    gap: 4,
                    borderRadius: "12px",
                    height: "100%",
                    // transition: "all 0.3s ease",
                    // cursor: "pointer",
                    // "&:hover": {
                    //   transform: "scale(1.05)",
                    // },
                  }}
                >
                  <Box sx={{ mb: 2, borderRadius: "12px" }}>
                    <Image
                      src={item.img}
                      alt={String(item.title)}
                      style={{ borderRadius: "12px" }}
                    />
                  </Box>

                  <Box sx={{ marginTop: "30px" }}>
                    <Typography
                      sx={{
                        marginTop: "20px",
                        lineHeight: "30px",
                        fontWeight: 500,
                        color: "#2E2E2E",
                        fontSize: "24px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: "20px",
                        color: "#6B7280",
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#0B1F33",
                        padding: "0px 10px",
                        borderRadius: "50px",
                        border: "#0B1F33 3px solid",
                        marginTop: "20px",
                        textAlign: "center",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                        },
                      }}
                    >
                      <Button
                        sx={{
                          textTransform: "none",
                          color: "white",
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{marginRight:"10px"}}>View Case Study</Typography>
                        <Box
                          sx={{
                            backgroundColor: "#fff",
                            padding: "5px",
                            borderRadius: "30px",
                          }}
                        >
                          <EastIcon sx={{ color: "#003880" }} />
                        </Box>
                      </Button>
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

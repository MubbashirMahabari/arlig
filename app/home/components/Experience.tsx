import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Grid, Button, Link } from "@mui/material";
import icon_1 from "../../../public/assets/blogs/blog_1.jpg";
import icon_2 from "../../../public/assets/blogs/blog_2.jpg";
import icon_3 from "../../../public/assets/blogs/blog_3.jpg";

export default function Experience() {
  const case_Study = [
    {
      id: 1,
      img: icon_1,
      date: "Sunday , 1 Jan 2023",
      title: "HydraFacial CRM Analytics and Performance Management Solution",
      desc: "HydraFacial needed a centralized platform to align individual employee performance with....",
    },
    {
      id: 2,
      img: icon_2,
      date: "Wednesday , 15 March 2023",
      title:
        "Data Streamline: A Salesforce-Centric Approach to Data Deduplication",
      desc: "In a fast-paced business world, managing data efficiently is critical to ensuring smooth...",
    },
    {
      id: 3,
      img: icon_3,
      date: "Tuesday , 23 May 2023",
      title:
        "Streamlining Bulk Envelope Sending with DocuSign in Salesforce Using LWC ",
      desc: "In many business scenarios, especially in legal or financial fields, there’s often a need to get...",
    },
  ];
  return (
    <Box className="" sx={{ paddingBottom: "40px" }}>
      <Container maxWidth="xl">
        <Box sx={{ marginTop: "30px" }}>
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Box sx={{ paddingTop: "0px" }}>
              <Typography
                sx={{ fontSize: "40px", fontWeight: "700", color: "#2E2E2E" }}
              >
                Learn From Experience
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "white",
                padding: "2px 20px",
                borderRadius: "50px",
                border: "#1F4ED8 2px solid",
                textAlign: "center",
                alignContent: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 10px 30px rgba(31, 78, 216, 0.2)",
                },
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                  color: "#1F4ED8",
                  textAlign: "center",
                  width: "100%",
                  alignContent: "center",
                }}
              >
                <Link href="/blog" style={{ textDecoration: "none" }}>
                  <Typography sx={{ fontWeight: "500" }}>More Blogs</Typography>
                </Link>
              </Button>
            </Box>
          </Box>

          <Box sx={{ marginTop: "30px" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {case_Study.map((item) => (
                <Grid key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
                  <Box
                    sx={{
                      gap: 6,
                      borderRadius: "12px",
                      height: { xs: "100%", sm: "100%", md: "460px" },
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 2, borderRadius: "12px", height:"240px" }}>
                      <Image
                        src={item.img}
                        alt={String(item.title)}
                        style={{ borderRadius: "12px", height:"100%" }}
                      />
                    </Box>

                    <Box sx={{ marginTop: "30px" }}>
                      <Typography
                        sx={{
                          color: "#1F4ED8",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        {item.date}
                      </Typography>
                      <Typography
                        sx={{
                          marginTop: "20px",
                          lineHeight: "32px",
                          fontWeight: 500,
                          color: "#2E2E2E",
                          fontSize: "24px",

                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
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
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

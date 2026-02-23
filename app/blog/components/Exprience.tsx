"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import icon_1 from "../../../public/assets/blogs/blog_1.jpg";
import icon_2 from "../../../public/assets/blogs/blog_2.jpg";
import icon_3 from "../../../public/assets/blogs/blog_3.jpg";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Link from "next/link";
import blogData from "../../../data/blogData";

export default function Exprience() {
  const [value, setValue] = React.useState("1");
  const [visibleCount, setVisibleCount] = useState(3);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setVisibleCount(3);
  };

  const filteredData =
    value === "1"
      ? blogData.filter((item) => item.type === "Blog")
      : blogData.filter((item) => item.type === "Case Study");

  return (
    <Box
      id="experience"
      sx={{
        backgroundColor: "#3BAFDA0A",
        padding: "40px 0",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
            width: { xs: "100%", sm: "100%", md: "1000px" },
            margin: "0 auto",
            marginTop: "16px",
          }}
        >
          <Typography sx={{ color: "#6B7280", fontSize: "16px" }}>
            At Arlig Technologies, we believe in sharing knowledge that drives
            transformation. Our resources showcase real-world implementations,
            industry insights, and strategic approaches that help organizations
            maximize their Salesforce investment and achieve measurable business
            outcomes.
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "40px" }}>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#2E2E2E",
              textAlign: "center",
            }}
          >
            Learn From Experience
          </Typography>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <TabContext value={value}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <TabList
                onChange={handleChange}
                TabIndicatorProps={{
                  style: {
                    display: "none",
                  },
                }}
                aria-label="lab API tabs example"
              >
                <Tab
                  label="Blogs"
                  value="1"
                  style={{
                    textTransform: "none",
                    border:
                      value === "1" ? "1px solid #1F4ED8" : "1px solid #E8E8E8",
                    backgroundColor: value === "1" ? "#d2ddff" : "#fff",
                    color: value === "1" ? "#1F4ED8" : "#1F4ED8",
                    borderRadius: "30px",
                    marginRight: "20px",
                  }}
                />
                <Tab
                  label="Case Study"
                  value="2"
                  style={{
                    textTransform: "none",
                    borderRadius: "30px",
                    border:
                      value === "2" ? "1px solid #1F4ED8" : "1px solid #E8E8E8",
                    backgroundColor: value === "2" ? "#d2ddff" : "#fff",
                    color: value === "2" ? "#1F4ED8" : "#1F4ED8",
                  }}
                />
              </TabList>
            </Box>
          </TabContext>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            {filteredData.slice(0, visibleCount).map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
                <Link
                  href={`/blog/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      marginTop: "60px",
                      gap: 6,
                      borderRadius: "12px",
                      height: { xs: "100%", sm: "100%", md: "460px" },
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 2, borderRadius: "12px" }}>
                      <img
                        src={item.img}
                        alt={String(item.title)}
                        style={{ borderRadius: "12px" }}
                      />
                    </Box>

                    <Box sx={{ marginTop: "30px" }}>
                      <Typography
                        sx={{
                          color: "#003366",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        {item.type}
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

                           display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
        {visibleCount < filteredData.length && (
          <Box
            sx={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              onClick={() => setVisibleCount((prev) => prev + 3)}
              sx={{
                backgroundColor: "white",
                marginTop: "20px",
                padding: "5px 20px",
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
                  color: "#fff",
                  textAlign: "center",
                  width: "100%",
                  alignContent: "center",
                }}
              >
                <Typography sx={{ fontWeight: "600", color: "#003366" }}>
                  More Resources
                </Typography>
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}

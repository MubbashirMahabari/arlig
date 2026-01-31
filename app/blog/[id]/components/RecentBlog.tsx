import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import blogData from "../../../../data/blogData";
import Link from "next/link";

export default function RecentBlog() {
  return (
    <Box sx={{ padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", color: "#2E2E2E" }}>
          <Typography sx={{ fontSize: "40px", fontWeight: "700" }}>
            Recent Blogs
          </Typography>
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {blogData.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
                <Link
                  href={`/blog/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      gap: 4,
                      borderRadius: "12px",
                      height: "100%",
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
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

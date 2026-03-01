"use client";
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { Blog } from "@/data/blogData";

type HeroProps = {
  blog: Blog;
};
export default function BlogContent({ blog }: HeroProps) {
  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", padding: "40px 0" }}>
      <Container maxWidth="xl">
        {blog.introduction && (
          <Box>
            <Typography sx={{ fontSize: "36px", fontWeight: 700 }}>
              Introduction
            </Typography>
            <Typography sx={{ color: "#6B7280", fontSize: "16px" }}>
              {blog.introduction}
            </Typography>
            {blog.paragraph_1 && (
              <Typography
                sx={{ marginTop: "15px", color: "#6B7280", fontSize: "16px" }}
              >
                {blog.paragraph_1}
              </Typography>
            )}
          </Box>
        )}
        {/* <Box
          sx={{
            marginTop: "40px",
            position: "relative",
            width: "100%",
            height: { xs: "220px", sm: "320px", md: "426px" }, // responsive height
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Image
            src={blog.img}
            alt="blog-img"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 1200px"
          />
        </Box> */}
        {blog.problem && (
          <Box sx={{ marginTop: "40px" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                <Box>
                  <Typography sx={{ fontSize: "36px", fontWeight: 700 }}>
                    Problem
                  </Typography>

                  <Typography
                    sx={{
                      color: "#6B7280",
                      fontSize: "16px",
                      whiteSpace: "pre-line", // 👈 important
                    }}
                  >
                    {blog.problem}
                  </Typography>
                </Box>
              </Grid>
              {/* <Grid size={{ xs: 12, sm: 4, md: 6 }}> */}
              {/* <Box
                  sx={{
                    marginTop: "40px",
                    position: "relative",
                    width: "100%",
                    height: { xs: "220px", sm: "320px", md: "426px" }, // responsive height
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={blog.img}
                    alt="blog-img"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 1200px"
                  />
                </Box> */}
              {/* </Grid> */}
            </Grid>
          </Box>
        )}

        <Box sx={{ marginTop: "20px" }}>
          {/* <Box
            sx={{
              marginTop: "40px",
              position: "relative",
              width: "100%",
              height: { xs: "220px", sm: "320px", md: "426px" }, // responsive height
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Image
              src={blog.img}
              alt="blog-img"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 1200px"
            />
          </Box> */}
          {blog.our_approach && (
            <Box sx={{ marginTop: "30px" }}>
              <Typography sx={{ fontSize: "36px", fontWeight: 700 }}>
                Our Approach
              </Typography>
              <Typography
                sx={{
                  color: "#6B7280",
                  fontSize: "16px",
                  whiteSpace: "pre-line",
                }}
              >
                {blog.our_approach}
              </Typography>
            </Box>
          )}

          {blog.technologies && (
            <Box sx={{ marginTop: "30px" }}>
              <Typography sx={{ fontSize: "36px", fontWeight: 700 }}>
                Technologies
              </Typography>
              <Typography
                sx={{
                  color: "#6B7280",
                  fontSize: "16px",
                  whiteSpace: "pre-line",
                }}
              >
                {blog.technologies}
              </Typography>
            </Box>
          )}

          {blog.code && (
            <Box sx={{ marginTop: "30px" }}>
              <Typography sx={{ fontSize: "36px", fontWeight: 700 }}>
                Code
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#F3F4F6",
                  padding: "20px",
                  borderRadius: "10px",
                  marginTop: "10px",
                  overflowX: "auto",
                  border: "1px solid #E5E7EB",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "14px",
                    color: "#374151",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {blog.code}
                </Typography>
              </Box>
            </Box>
          )}

          {blog.challenge && (
            <Box sx={{ marginTop: "30px" }}>
              <Typography sx={{ fontSize: "36px", fontWeight: 700 }}>
                Key Challenges
              </Typography>
              <Typography
                sx={{
                  color: "#6B7280",
                  fontSize: "16px",
                  whiteSpace: "pre-line",
                }}
              >
                {blog.challenge}
              </Typography>
            </Box>
          )}

          {blog.conclusion && (
            <Box sx={{ marginTop: "30px" }}>
              <Typography sx={{ fontSize: "36px", fontWeight: 700 }}>
                Conclusion
              </Typography>
              <Typography
                sx={{
                  color: "#6B7280",
                  fontSize: "16px",
                  whiteSpace: "pre-line",
                }}
              >
                {blog.conclusion}
              </Typography>
            </Box>
          )}

          {blog.author_bio && (
            <Box sx={{ marginTop: "30px" }}>
              <Typography sx={{ fontSize: "36px", fontWeight: 700 }}>
                Author Bio
              </Typography>
              <Typography
                sx={{
                  // marginTop: "15px",
                  color: "#6B7280",
                  fontSize: "16px",
                  whiteSpace: "pre-line",
                  fontStyle: "italic",
                }}
              >
                {blog.author_bio}
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

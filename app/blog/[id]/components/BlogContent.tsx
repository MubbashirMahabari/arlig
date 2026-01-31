import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
type Blog = {
  img: string;

  paragraph_1: string;
};

type HeroProps = {
  blog: Blog;
};
export default function BlogContent({ blog }: HeroProps) {
  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <Typography sx={{ color: "#6B7280", fontSize: "16px" }}>
            {blog.paragraph_1}
          </Typography>
          <Typography
            sx={{ marginTop: "15px", color: "#6B7280", fontSize: "16px" }}
          >
            {blog.paragraph_1}
          </Typography>
        </Box>
        <Box
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
        </Box>
        <Box sx={{ marginTop: "40px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid size={{ xs: 12, sm: 4, md: 6 }}>
              <Box>
                <Typography sx={{ color: "#6B7280", fontSize: "16px" }}>
                  {blog.paragraph_1}
                </Typography>
                <Typography
                  sx={{ marginTop: "15px", color: "#6B7280", fontSize: "16px" }}
                >
                  {blog.paragraph_1}
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 6 }}>
              <Box
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
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ marginTop: "20px" }}>
          <Box
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
          </Box>
          <Box sx={{marginTop:"30px"}}>
            <Typography sx={{ color: "#6B7280", fontSize: "16px" }}>
              {blog.paragraph_1}
            </Typography>
            <Typography
              sx={{ marginTop: "15px", color: "#6B7280", fontSize: "16px" }}
            >
              {blog.paragraph_1}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

type Blog = {
  img: string;
  title: string;
  date: string;
};

type HeroProps = {
  blog: Blog;
};

export default function Hero({ blog }: HeroProps) {
  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Typography
          sx={{ color: "#1F4ED8", fontSize: "14px", fontWeight: 600 }}
        >
          {blog.date}
        </Typography>

        <Typography sx={{ fontSize: "36px", fontWeight: 700 }}>
          {blog.title}
        </Typography>

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
            alt={blog.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 1200px"
          />
        </Box>
      </Container>
    </Box>
  );
}

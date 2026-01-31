import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 - Page Not Found | Arlig",
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: "#FFFFFF",
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px 0",
            }}
        >
            <Container maxWidth="xl" sx={{ textAlign: "center" }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "80px", md: "120px" },
                        fontWeight: 700,
                        lineHeight: 1,
                        color: "#3BAFDA0A", // Very subtle styling, or maybe use brand color #003366?
                        // Actually, matching the Hero style might be better.
                        // Let's use the Hero typography style but adapted for 404
                        fontFamily: "inherit",
                    }}
                >
                    404
                </Typography>

                <Typography
                    component="h2"
                    sx={{
                        fontSize: { xs: "30px", md: "48px" },
                        fontWeight: 700,
                        lineHeight: 1.2,
                        color: "#2E2E2E",
                        mt: 2,
                        fontFamily: "inherit",
                    }}
                >
                    Page Not Found
                </Typography>

                <Typography
                    sx={{
                        marginTop: "20px",
                        fontSize: "18px",
                        color: "#6B7280",
                        maxWidth: "600px",
                        mx: "auto",
                        fontFamily: "inherit",
                    }}
                >
                    Oops! The page you are looking for doesn't exist. It might have been
                    moved or deleted.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "40px",
                        gap: "20px",
                        flexWrap: "wrap",
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: "#003366",
                            borderRadius: "50px",
                            textAlign: "center",
                            padding: "2px",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.05)",
                                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                            },
                        }}
                    >
                        <Link href="/" style={{ textDecoration: "none" }}>
                            <Button
                                sx={{
                                    color: "white",
                                    textTransform: "none",
                                    fontWeight: "500",
                                    padding: "10px 30px",
                                    fontSize: "16px",
                                    fontFamily: "inherit",
                                }}
                            >
                                Go Back to Home
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

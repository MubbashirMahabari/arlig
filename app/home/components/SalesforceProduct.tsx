"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import icon_1 from "../../../public/assets/expertise/social-network.png";
import icon_2 from "../../../public/assets/expertise/implementation.png";
import icon_3 from "../../../public/assets/expertise/collaborate.png";
import icon_4 from "../../../public/assets/expertise/staff-management.png";
import Image from "next/image";
import graphImage from "../../../public/assets/products/product_graph.png";

export default function SalesforceProduct() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lastVisibleIndex, setLastVisibleIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const visibleItems = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));

          if (entry.isIntersecting) {
            visibleItems.add(index);
          } else {
            visibleItems.delete(index);
          }
        });

        if (visibleItems.size > 0) {
          setLastVisibleIndex(Math.max(...visibleItems));
        }
      },
      {
        root: containerRef.current,
        threshold: 0.6, // adjust if needed
      },
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const product_data = [
    {
      id: 1,
      img: icon_1,
      title: "Sales Cloud",
      desc: "Streamline your sales pipeline and close deals faster.",
    },
    {
      id: 2,
      img: icon_2,
      title: "Service Cloud",
      desc: "Deliver seamless customer support experiences.",
    },
    {
      id: 3,
      img: icon_2,
      title: "Experience Cloud",
      desc: "Empower employees, partners, and customers with portals.",
    },
    {
      id: 4,
      img: icon_2,
      title: "Tableau CRM",
      desc: "Turn data into actionable insights.",
    },
    {
      id: 5,
      img: icon_2,
      title: "Contract Lifecycle Management (CLM)",
      desc: "Simplify contract processes from draft to sign-off.",
    },
    {
      id: 6,
      img: icon_2,
      title: "Integration",
      desc: "Connect Salesforce with Finance, HR, Payroll, and third-party apps.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#3BAFDA0A", padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box sx={{ paddingTop: "20px" }}>
          <Typography
            sx={{ fontSize: "40px", fontWeight: "700", color: "#2E2E2E" }}
          >
            Deep Expertise Across Salesforce Products
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ color: "#6B7280", fontSize: "16px", marginTop: "10px" }}
          >
            Our certified team brings hands-on expertise across the Salesforce
            ecosystem
          </Typography>
        </Box>

        <Box sx={{ marginTop: "40px", padding: { xs: "0px", md: "0px 30px" } }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid size={{ xs: 12, sm: 4, md: 6 }}>
              <Box
                ref={containerRef}
                sx={{
                  maxHeight: { xs: "none", md: 600 },
                  overflowY: "auto",
                  overflowX: "hidden",
                  pr: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  "&::-webkit-scrollbar": { display: "none" },
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {product_data.map((item, idx) => (
                  <Box
                    key={item.id}
                    ref={(el: HTMLDivElement | null) => {
                      itemRefs.current[idx] = el;
                    }}
                    data-index={idx}
                    sx={{
                      gap: 2,
                      p: 3,
                      mb: 2,
                      borderRadius: "16px",
                      backgroundColor: "#F5F8FF",
                      boxShadow: "0 2px 8px 0 rgba(59,175,218,0.05)",
                      border: "1px solid #E3EAFD",
                      transition: "all 0.3s",
                      cursor: "pointer",
                      opacity: lastVisibleIndex === idx ? 0.5 : 1,
                      "&:hover": {
                        transform: "scale(1.03)",
                        boxShadow: "0 8px 24px 0 rgba(59,175,218,0.15)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      <Image
                        src={item.img}
                        alt={String(item.title)}
                        width={40}
                        height={40}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: lastVisibleIndex === idx ? "#A0AEC0" : "#1F4ED8",
                        fontSize: "20px",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: lastVisibleIndex === idx ? "#CBD5E1" : "#1F2937",
                        mt: 0.5,
                        fontSize: "15px",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 6 }}>
              <Box sx={{ width: "100%" }}>
                <Image src={graphImage} alt="Graph" style={{ width: "100%" }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

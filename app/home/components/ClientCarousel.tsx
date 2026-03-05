"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import type { SwiperOptions } from "swiper/types";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import brand_img_1 from "../../../public/assets/client/new client/Juincubator.png";
import brand_img_3 from "../../../public/assets/client/new client/Berrypay.png";
import brand_img_4 from "../../../public/assets/client/new client/5p.png";
import brand_img_5 from "../../../public/assets/client/new client/Gaboo.png";
import brand_img_6 from "../../../public/assets/client/new client/HSBE.png";
// import brand_img_7 from "../../../public/assets/client/new client/Juincubator.png";
// import brand_img_8 from "../../../public/assets/client/Company logo-7.png";
// import brand_img_9 from "../../../public/assets/client/Company logo-8.png";
// import brand_img_10 from "../../../public/assets/client/Company logo-9.png";
// import brand_img_2 from "../../../public/assets/client/Company logo-10.png";

export default function ClientCarousel() {
  const brand_content = {
    brand_img_next: [
      { img: brand_img_1 },
      { img: brand_img_4 },

      { img: brand_img_3 },
      { img: brand_img_6 },

      { img: brand_img_5 },
      { img: brand_img_1 },


      { img: brand_img_4 },
      { img: brand_img_5 },
    ],
  };
  const { brand_img_next } = brand_content;

  const settings: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 0,
    speed: 3000,
    loop: true,
    freeMode: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
    },
  };

  return (
    <Box sx={{ padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Box
          sx={{ textAlign: "center", marginBottom: "30px", color: "#2E2E2E" }}
        >
          <Typography sx={{ fontSize: "24px" }}>
            Join our growing list of Happy Clients
          </Typography>
        </Box>
        <Box sx={{ borderTop: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0", borderLeft: "1px solid #e0e0e0" }}>
          <Box>
            <Swiper
              {...settings}
              modules={[Autoplay]}
              loop={true}
              className="continuous-slider"
            >
              {brand_img_next.map((item, i) => (
                <SwiperSlide key={i} className="brand-new-images">
                  <Box
                    sx={{
                      height: { xs: "100px", sm: "110px", md: "120px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRight: "1px solid #e0e0e0",
                      padding: { xs: "12px", sm: "16px", md: "20px" },
                    }}
                  >
                    <Image
                      src={item.img}
                      alt="client-logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

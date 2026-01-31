"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

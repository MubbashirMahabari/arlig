"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";
import { StrategyModalProvider } from "./context/StrategyModalContext";
import StrategySessionModal from "../components/modals/StrategySessionModal";

const inter = Inter({
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <StrategyModalProvider>
        {children}
        <StrategySessionModal />
      </StrategyModalProvider>
    </ThemeProvider>
  );
}

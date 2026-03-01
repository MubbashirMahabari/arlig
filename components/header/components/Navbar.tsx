'use client';
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../public/assets/logo_arlig.svg";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../navLinks";
import { usePathname } from "next/navigation";
import { useStrategyModal } from "../../../app/context/StrategyModalContext";

function Navbar() {
  const { openModal } = useStrategyModal();

  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [openResourcesMobile, setOpenResourcesMobile] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorElResources, setAnchorElResources] =
    React.useState<null | HTMLElement>(null);

  const handleResourcesOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElResources(event.currentTarget);
  };

  const handleResourcesClose = () => {
    setAnchorElResources(null);
  };
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* normal app bar logo */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link href="/">
              <Image src={logo} alt="Logo" height={100} width={100} />
            </Link>
          </Box>

          {/* mobile app bar menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ padding: "0px" }}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              className=""
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
              PaperProps={{
                sx: {
                  width: "100%",
                },
              }}
            >
              {navLinks.map((page) => {
                // 🔹 RESOURCES (MOBILE DROPDOWN)
                if (page.children) {
                  return (
                    <Box key={page.label} sx={{ width: "100%" }}>
                      <MenuItem
                        onClick={() =>
                          setOpenResourcesMobile(!openResourcesMobile)
                        }
                        sx={{ justifyContent: "center" }}
                      >
                        <Typography fontWeight={600}>{page.label}</Typography>
                      </MenuItem>

                      {openResourcesMobile &&
                        page.children.map((child) => (
                          <MenuItem
                            key={child.label}
                            onClick={handleCloseNavMenu}
                            sx={{ justifyContent: "center", pl: 4, textDecoration: "none", color: "inherit" }}
                            component={Link}
                            href={child.href}
                          >
                            <Typography fontSize="15px">
                              {child.label}
                            </Typography>
                          </MenuItem>
                        ))}
                    </Box>
                  );
                }

                // 🔹 NORMAL MOBILE LINKS
                return (
                  <MenuItem
                    key={page.label}
                    onClick={handleCloseNavMenu}
                    sx={{ justifyContent: "center", textDecoration: "none", color: "inherit" }}
                    component={Link}
                    href={page.href!}
                  >
                    <Typography fontWeight={600}>{page.label}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          {/* mobile app bar logo */}
          {/* <Image src={logo} alt="Logo" height={50} width={50} /> */}
          {/* normal app bar menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, margin: "0 auto" }}>
            {navLinks.map((page) => {
              // 🔹 RESOURCES DROPDOWN
              if (page.children) {
                return (
                  <Box key={page.label}>
                    <Button
                      onMouseEnter={handleResourcesOpen}
                      sx={{
                        my: 2,
                        mx: 2,
                        color: "#2E2E2E",
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "18px",
                        borderRadius: 0,
                        borderBottom:
                          pathname === "/blog" || pathname === "/industry"
                            ? "#003366 3px solid"
                            : "none",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#003366",
                        },
                      }}
                    >
                      {page.label}
                    </Button>

                    <Menu
                      anchorEl={anchorElResources}
                      open={Boolean(anchorElResources)}
                      onClose={handleResourcesClose}
                      MenuListProps={{
                        onMouseLeave: handleResourcesClose,
                        sx: { py: 1 },
                      }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      PaperProps={{
                        elevation: 4,
                        sx: {
                          mt: 1.5,
                          overflow: "visible",
                          borderRadius: "12px",
                          border: "1px solid #eaeaea",
                          boxShadow:
                            "0px 10px 40px -10px rgba(0,0,0,0.08)",
                        },
                      }}
                    >
                      {page.children.map((child) => {
                        const isActive = pathname === child.href;
                        return (
                          <MenuItem
                            key={child.label}
                            component={Link}
                            href={child.href}
                            onClick={handleResourcesClose}
                            sx={{
                              minWidth: "200px",
                              px: 3,
                              py: 1.5,
                              color: isActive ? "#003366" : "#4a4a4a",
                              fontWeight: isActive ? 600 : 500,
                              backgroundColor: isActive
                                ? "#f0f7ff"
                                : "transparent",
                              fontSize: "15px",
                              transition: "all 0.2s ease",
                              "&:hover": {
                                backgroundColor: "#f5f9ff",
                                color: "#003366",
                                pl: 3.5, // Subtle shift effect
                              },
                            }}
                          >
                            {child.label}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  </Box>
                );
              }

              // 🔹 NORMAL LINKS
              return (
                <Button
                  key={page.label}
                  component={Link}
                  href={page.href!}
                  sx={{
                    my: 2,
                    mx: 2,
                    color: "#2E2E2E",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "18px",
                    borderRadius: 0,
                    borderBottom:
                      pathname === page.href ? "#003366 3px solid" : "none",
                  }}
                >
                  {page.label}
                </Button>
              );
            })}
          </Box>

          {/* button */}
          <Box
            sx={{
              flexGrow: 0,
              borderRadius: "50px",
              backgroundColor: "#003366",
              textAlign: "center",
              padding: "10px 18px",
            }}
          >

            <Button
              onClick={openModal}
              sx={{
                p: 0,
                color: "white",
                textTransform: "none",
                fontWeight: "500",
              }}
            >
              Let's collaborate
            </Button>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

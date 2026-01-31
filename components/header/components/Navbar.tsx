"use client";
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
import logo from "../../../public/assets/arlig_logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../navLinks";
import { usePathname } from "next/navigation";

function Navbar() {
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
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
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
                            sx={{ justifyContent: "center", pl: 4 }}
                          >
                            <Link
                              href={child.href}
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <Typography fontSize="15px">
                                {child.label}
                              </Typography>
                            </Link>
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
                    sx={{ justifyContent: "center" }}
                  >
                    <Link
                      href={page.href!}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography fontWeight={600}>{page.label}</Typography>
                    </Link>
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
                      }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      {page.children.map((child) => (
                        <MenuItem
                          key={child.label}
                          component={Link}
                          href={child.href}
                          onClick={handleResourcesClose}
                        >
                          {child.label}
                        </MenuItem>
                      ))}
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
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  p: 0,
                  color: "white",
                  textTransform: "none",
                  fontWeight: "500",
                }}
              >
                Let's collaborate
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

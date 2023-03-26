import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import { Box } from "@mui/system";
import { NavLink, useNavigate } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useCartContext } from "../context/cart_context";

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  toolbar: theme.mixins.toolbar,
  display: "flex",
  alignItems: "center",
  //  justifyContent:"space-between",

  height: "100%",
  width: "1280px",
  margin: "0 auto",
}));

const StyledLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
  "&.active": {
    fontWeight: "bold",
    color: "#fff",
  },
}));

const Navbar = () => {
  const { total_items } = useCartContext();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/cart");
  };

  return (
    <AppBar component="nav" position="sticky" sx={{ height: "80px" }}>
      <CustomToolbar>
        <Typography variant="h4">My Cart</Typography>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            justifyContent: "space-around",
            maxWidth: "400px",
          }}
        >
          <StyledLink to="/">Store</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </Box>

        <Badge
          badgeContent={total_items}
          color="secondary"
          sx={{ marginLeft: "auto" }}
        >
          <ShoppingCartIcon
            sx={{ color: "#fff" }}
            onClick={handleNavigate}
          ></ShoppingCartIcon>
        </Badge>
      </CustomToolbar>
    </AppBar>
  );
};

export default Navbar;

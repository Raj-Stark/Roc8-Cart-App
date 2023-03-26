import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import { Button, Divider, styled } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

const AddToCart = styled(Button)(({ theme }) => ({
  background: "green",
  padding: "5px 10px",
  color: "#fff",
  fontSize: "16px",
  textTransform: "capitalize",
}));

const Increment = styled(Button)(({ theme }) => ({
  background: "green",
  padding: "5px 10px",
  color: "#fff",
  fontSize: "16px",
  textTransform: "capitalize",
}));
const Decrement = styled(Button)(({ theme }) => ({
  background: "green",
  padding: "5px 10px",
  color: "#fff",
  fontSize: "16px",
  textTransform: "capitalize",
}));

const CardBox = ({ id, title, price, image }) => {
  const navigate = useNavigate();

  const { addToCart } = useCartContext();

  const handleNavigate = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <Card sx={{ maxWidth: { xs: "100%", lg: "80%" }, margin: "0 auto" }}>
      <CardMedia
        component="img"
        height="250"
        image={`${image}`}
        onClick={() => handleNavigate(id)}
      />
      <CardContent sx={{ px: "20px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title.slice(0, 30) + " ..."}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {price} $
          </Typography>
        </Box>
      </CardContent>
      <Divider />

      <CardActions
        sx={{ px: "20px", display: "flex", justifyContent: "space-between" }}
      >
        <AddToCart
          variant="contained"
          onClick={() => addToCart(id, title, price, image)}
        >
          Add To Cart
        </AddToCart>
      </CardActions>
    </Card>
  );
};

export default CardBox;

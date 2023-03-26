import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const CartPage = () => {
  const { cart, removeItem, toggleAmount, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <Container sx={{ mt: 10 }}>
        <Typography variant="h5" align="center">
          Your cart is currently empty.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          sx={{ mt: 2 }}
        >
          Go back to shop
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1">Product</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">Price</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">Quantity</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">Subtotal</Typography>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => {
                const { id, name, price, image, amount } = item;

                let subtotal = (price * amount).toFixed(2);

                return (
                  <TableRow key={id}>
                    <TableCell>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <img src={image} alt={name} width="50" />
                        </Grid>
                        <Grid item>
                          <Typography>{name}</Typography>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell>${price}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => toggleAmount(id, "dec")}
                      >
                        -
                      </Button>
                      <Typography component="span" sx={{ mx: 1 }}>
                        {amount}
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => toggleAmount(id, "inc")}
                      >
                        +
                      </Button>
                    </TableCell>
                    <TableCell>${subtotal}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => removeItem(id)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Grid item>
              <Button variant="outlined" color="secondary" onClick={clearCart}>
                Clear cart
              </Button>
            </Grid>
            <Grid item sx={{ ml: 2 }}>
              <Button variant="contained" color="primary" component={Link}>
                Proceed to checkout
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;

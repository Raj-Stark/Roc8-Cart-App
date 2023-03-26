import { useParams } from "react-router-dom";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { useProductsContext } from "../context/products_context";
import { useEffect } from "react";

const SingleProductPage = () => {
  const { id } = useParams();

  const {
    fetchSingleProduct,
    single_product_loading,
    single_product_error,
    single_product,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`https://fakestoreapi.com/products/${id}`);
  }, []);

  return (
    <Box sx={{ maxWidth: { xs: "100%", lg: "80%" }, margin: "0 auto" }}>
      {single_product_loading ? (
        <Typography>Loading...</Typography>
      ) : single_product_error ? (
        <Typography>Error fetching product.</Typography>
      ) : (
        <Card>
          <CardMedia
            component="img"
            height="500"
            image={single_product.image}
            alt={single_product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {single_product.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {single_product.price} $
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1">
              {single_product.description}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" color="text.secondary">
              Category: {single_product.category}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default SingleProductPage;

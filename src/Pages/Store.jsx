import { Box, Grid } from "@mui/material";
import React from "react";
import CardBox from "../components/CardBox";
import SearchBox from "../components/SearchBox";
import { useProductsContext } from "../context/products_context";

const Store = () => {
  const { products, searchProduct, filterProduct } = useProductsContext();

  return (
    <Box sx={{ padding: "20px 50px" }}>
      <SearchBox handleSearch={searchProduct}></SearchBox>

      <Grid container rowGap={6} sx={{ marginTop: "20px" }}>
        {filterProduct.length > 0
          ? filterProduct.map((item) => {
              return (
                <Grid key={item.id} item xs={12} md={6}>
                  <CardBox {...item}></CardBox>
                </Grid>
              );
            })
          : products.map((item) => {
              return (
                <Grid key={item.id} item xs={12} md={6}>
                  <CardBox {...item}></CardBox>
                </Grid>
              );
            })}
      </Grid>
    </Box>
  );
};

export default Store;

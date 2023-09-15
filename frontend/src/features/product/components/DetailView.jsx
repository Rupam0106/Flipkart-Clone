import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled, Box, Typography, Grid } from "@mui/material";
import ProductDetail from "./ProductDetail";
import ActionItem from "./ActionItem";
import { fetchProductByIdAsync, selectProductById } from "../ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  & > p {
    margin-top: 10px;
  }
`;
const DetailView = () => {
  
  const product= useSelector(selectProductById);
  console.log(product)
  const { id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProductByIdAsync(id));
  }, [dispatch, id]);

  
 
  

  return (
    <Component>
      {product && Object.keys(product)?.length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8}>
            <Typography>{product?.title?.longTitle}</Typography>
            <Typography
              style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
            >
              8 Ratings & 1 Reviews
            </Typography>
            <Typography>
              <span style={{ fontSize: 28 }}>₹{product?.price?.cost}</span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#878787" }}>
                <strike>₹{product?.price?.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product?.price?.discount} off
              </span>
            </Typography>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;

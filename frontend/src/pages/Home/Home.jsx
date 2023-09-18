import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { fetchProducts, selectAllProducts } from "../../features/product/ProductSlice";
import Slide from "./Slide";
import { Box, styled } from "@mui/material";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import Loader from "../../common/Loader/Loader";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Loader />
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products.products} />
        <MidSection />
        <Slide
          data={products.products}
          title="Discounts for You"
          timer={false}
          multi={true}
        />
        <Slide
          data={products.products}
          title="Suggested Items"
          timer={false}
          multi={true}
        />
        <Slide
          data={products.products}
          title="Top Selection"
          timer={false}
          multi={true}
        />
        <Slide
          data={products.products}
          title="Recommended Items"
          timer={false}
          multi={true}
        />
      </Component>
    </>
  );
};

export default Home;

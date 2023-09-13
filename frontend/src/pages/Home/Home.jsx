import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { fetchProducts } from "../../features/product/ProductSlice";
import Slide from "./Slide";
import { Box, styled } from "@mui/material";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} />
        <MidSection />
        <Slide
          data={products}
          title="Discounts for You"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Suggested Items"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Top Selection"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Recommended Items"
          timer={false}
          multi={true}
        />
      </Component>
    </>
  );
};

export default Home;

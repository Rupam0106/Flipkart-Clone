import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { fetchBrandsAsync, fetchCategoriesAsync, selectAllProducts } from "../../features/product/ProductSlice";
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
  const dispatch = useDispatch();
  const {data} = useSelector(selectAllProducts);
console.log(data)
  useEffect(() => {
    dispatch(fetchBrandsAsync());
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <>
      <Loader />
      <NavBar />
      <Component>
        <Banner />
        {/* <MidSlide products={data} /> */}
        <MidSection />
        {/* <Slide
          data={data}
          title="Discounts for You"
          timer={false}
          multi={true}
        /> */}
        {/* <Slide
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
        /> */}
      </Component>
    </>
  );
};

export default Home;

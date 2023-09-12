import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { fetchProducts } from "../../features/product/ProductSlice";

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <NavBar />
      <Banner />
    </>
  );
};

export default Home;

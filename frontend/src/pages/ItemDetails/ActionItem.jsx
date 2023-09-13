import { Button, Box, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/CartSlice";
import useFetch from "../../service/api";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "80%",
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;



const ActionItem = ({ product }) => {
  const data  = useFetch(`${product.id}`);
  console.log(data)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buyNow = async () => {};

  const addItemToCart = () => {
    dispatch(addToCart(data));
    navigate("/cart");
  };

  return (
    <LeftContainer>
      <Image src={product.detailUrl} />
      <br />
      <StyledButton
        onClick={() => addItemToCart()}
        style={{ marginRight: 10, background: "#ff9f00" }}
        variant="contained"
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton
        onClick={() => buyNow()}
        style={{ background: "#fb641b" }}
        variant="contained"
      >
        <Flash /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;

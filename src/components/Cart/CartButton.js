import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../redux";
const CartButton = (props) => {
  let totalQuantity = useSelector((state) => state.cart.totalQuantity);
  let dispatch = useDispatch();
  let handleButton = () => {
    dispatch(uiAction.toggle());
  };
  return (
    <button className={classes.button} onClick={handleButton}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity ? totalQuantity : 0}</span>
    </button>
  );
};

export default CartButton;

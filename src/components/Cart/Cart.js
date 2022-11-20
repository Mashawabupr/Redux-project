import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  let items = useSelector((state) => state.cart.items);
  ;
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.length !== 0 && (
          <CartItem
            item={{
              title: items[0].title,
              quantity: items[0].quantity,
              total: items[0].total,
              price: items[0].price,
              id: "el1",
            }}
          />
        )}
      </ul>
    </Card>
  );
};

export default Cart;

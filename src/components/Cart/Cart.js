import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  let items = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((el) => {
          return (
            <CartItem
              key={el.id}
              item={{
                title: el.title,
                quantity: el.quantity,
                total: el.total,
                price: el.price,
                id: el.id,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { receivedCartData } from "./redux";
import Notification from "./components/Notification";
import { sendCartData } from "./redux";
let initial = 0;
function App() {
  let { show, notification } = useSelector((state) => state.ui);
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  useEffect(() => {
    console.log(4);
    dispatch(receivedCartData());
  }, [dispatch]);
  useEffect(() => {
    console.log(3);
    if (initial === 0) {
      initial++;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <div>
      {notification && <Notification status={notification} />}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </div>
  );
}

export default App;

import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  let dummyList = [
    {
      title: "Test",
      price: 6,
      id: "el1",
    },
    {
      title: "book",
      price: 12,
      id: "el2",
    },
  ];
  /** let [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://react-projects-160bb-default-rtdb.firebaseio.com/cart/items.json"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); */
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyList.map((el) => {
          return (
            <ProductItem
              key={el.id}
              title={el.title}
              price={el.price}
              id={el.id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;

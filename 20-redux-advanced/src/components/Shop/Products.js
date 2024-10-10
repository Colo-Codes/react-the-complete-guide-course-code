import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id={1}
          title="🎁 Test Product 1"
          price={13}
          description="This is a first product - amazing!"
        />
        <ProductItem
          id={2}
          title="📦 Test Product 2"
          price={8}
          description="This is the second product... not so good"
        />
      </ul>
    </section>
  );
};

export default Products;

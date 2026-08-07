export default function ProductList({ products }) {
  return (
    <section>
      <h2>All Products</h2>
      {products.length === 0 ? <p>No products yet.</p> : products.map((product) => (
        <article className="product-card" key={product._id}>
          <h3>{product.title}</h3>
          <p>Price: ${Number(product.price).toFixed(2)}</p>
          <p>{product.description}</p>
        </article>
      ))}
    </section>
  );
}

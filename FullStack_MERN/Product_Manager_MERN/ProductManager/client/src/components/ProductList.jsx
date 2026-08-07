function ProductList({ products, loading, error }) {
  return (
    <section className="card">
      <div className="section-heading">
        <h2>Products</h2>
        <span>{products.length}</span>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && products.length === 0 && (
        <p>No products yet. Create your first product.</p>
      )}

      <div className="product-list">
        {products.map((product) => (
          <article className="product" key={product._id}>
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
            <strong>${Number(product.price).toFixed(2)}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductList;

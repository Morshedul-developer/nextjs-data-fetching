import Product from "@/components/Product";

const getProducts = async () => {
//   const res = await fetch("http://localhost:5004/products", {cache: 'force-cache'});
  const res = await fetch("http://localhost:5004/products", {cache: 'no-store'});
  return res.json();
};

const ProductsPage = async() => {
    const products = await getProducts();
  return (
  <div>
    <h2>Products: {products.length}</h2>
    <div className="grid grid-cols-3 gap-4">
        {
            products.map(product => <Product key={product.id} product={product}></Product>)
        }
    </div>
  </div>
  );
};

export default ProductsPage;

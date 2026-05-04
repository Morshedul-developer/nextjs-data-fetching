export async function generateStaticParams() {
  const res = await fetch('http://localhost:5004/products');
  const products = await res.json();
 
  return products.map((product) => ({
    id: product.id,
  }))
}

const ProductDetailsPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch(`http://localhost:5004/products/${id}`);
    const {name, category, price} = await res.json();
  return (
  <div>
    <h2>Product Name: {name}</h2>
    <p>Category: {category}</p>
    <p>Price: {price}</p>
  </div>
  );
};

export default ProductDetailsPage;

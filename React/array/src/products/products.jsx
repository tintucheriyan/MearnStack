import ProductCard from "./productCard";
function Products(){
    const products = [
  {
    id: 1,
    name: "Laptop",
    price: 70000,
    features: ["16GB RAM", "512GB SSD", "Intel i7"]
  },
  {
    id: 2,
    name: "Smartphone",
    price: 30000,
    features: ["AMOLED Display", "128GB Storage", "5000mAh Battery"]
  },
  {
    id: 3,
    name: "Headphones",
    price: 5000,
    features: ["Noise Cancellation", "Bluetooth 5.0", "20hr Battery"]
  }
];
    return(
        <>
        <div style={{ display: "flex" }}>
            {
                products.map(data=>
                  <ProductCard  id={data.id} name={data.name} price={data.price} features={data.features} />
                )
            }
        
        </div>
        </>
    )
}

export default Products;
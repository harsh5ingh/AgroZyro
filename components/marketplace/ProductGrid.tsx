import ProductCard from "./ProductCard";

const products = [
  {
    name: "Mustard Seeds",
    location: "Madhya Pradesh",
    price: "₹5,850",
    change: "+2.4%",
    changePositive: true,
    badge: "Popular",
    image: "/images/market/mustard.jpg",
  },
  {
    name: "Soybean",
    location: "Maharashtra",
    price: "₹4,320",
    change: "-1.2%",
    changePositive: false,
    badge: "Best Value",
    image: "/images/market/soybean.jpg",
  },
  {
    name: "Wheat",
    location: "Uttar Pradesh",
    price: "₹2,150",
    change: "+0.8%",
    changePositive: true,
    image: "/images/market/wheat.jpg",
  },
  {
    name: "Rice",
    location: "Chhattisgarh",
    price: "₹3,980",
    change: "+1.5%",
    changePositive: true,
    image: "/images/market/rice.jpg",
  },
  {
    name: "Mustard Seeds",
    location: "Rajasthan",
    price: "₹5,100",
    change: "+2.1%",
    changePositive: true,
    image: "/images/market/mustard.jpg",
  },
  {
    name: "Soybean",
    location: "Andhra Pradesh",
    price: "₹4,980",
    change: "-0.8%",
    changePositive: false,
    image: "/images/market/soybean.jpg",
  },
];

export default function ProductGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-3
        sm:gap-4
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {products.map((product) => (
        <ProductCard
          key={`${product.name}-${product.location}`}
          product={product}
        />
      ))}
    </div>
  );
}
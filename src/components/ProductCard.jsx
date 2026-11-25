const ProductCard = ({product}) => {
  return (
    <div key={product.id} className="bg-white rounded-lg shadow-p-4 flex flex-col">
      <img src={product.image} alt={product.name} className="h-40 object-cover rounded mb-4" />
      <h1 className="text-xl font-semibold">{product.name}</h1>
      <h3 className="text-gray-500 text-sm mb-2">{product.description}</h3>
      <p className="font-bold text-lg">£{product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;

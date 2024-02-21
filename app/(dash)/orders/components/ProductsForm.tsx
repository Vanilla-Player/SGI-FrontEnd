import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <ul>
    {products.map((product) => (
      <li key={product.id}>{product.name}</li>
    ))}
  </ul>
);

const ProductInput: React.FC<{
  onAddProduct: (productName: string) => void;
}> = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const handleAddProduct = () => {
    if (productName.trim() !== "") {
      onAddProduct(productName);
      setProductName("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={productName}
        onChange={handleInputChange}
        placeholder="Enter product name"
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

const ProductManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (productName: string) => {
    const newProduct: Product = {
      id: new Date().getTime(),
      name: productName,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <h2>Product Manager</h2>
      <ProductInput onAddProduct={handleAddProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default ProductManager;

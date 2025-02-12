import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";

const CartSec = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load existing cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();

        if (data.products && data.products.length > 0) {
          const selectedProduct = data.products.find(
            (product) => product.id.toString() === id
          );

          if (selectedProduct) {
            // Check if the product is already in the cart
            const existingProduct = storedCart.find(
              (item) => item.id.toString() === id
            );

            if (!existingProduct) {
              storedCart.push({ ...selectedProduct, qty: 1 });
            }
          }
        }

        // Update state and localStorage
        setProducts(storedCart);
        localStorage.setItem("cart", JSON.stringify(storedCart));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [id]);

  // Update localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  const onChange = (e, index) => {
    const { value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[index].qty = Number(value);
    setProducts(updatedProducts);
  };

  const onRemove = (index) => {
    const updatedCart = products.filter((_, i) => i !== index);
    setProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = products.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <section className="py-14 md:py-24 bg-white text-zinc-900 relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            {products.length > 0 ? (
              products.map((item, i) => (
                <ProductItem item={item} index={i} onChange={onChange} onRemove={onRemove} key={i} />
              ))
            ) : (
              <p className="text-center text-red-500 text-lg">No items in the cart.</p>
            )}
          </div>
          <div className="w-full lg:w-1/3">
            <SideBar total={total} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SideBar = ({ total }) => {
  const Navigate = useNavigate();
  return (
    <div className="bg-green-100 rounded-xl flex flex-col gap-6 p-4 md:p-6">
      <h6 className="font-medium mb-2 opacity-75 ">Order Summary</h6>
      <div className="flex justify-between items-center">
        <span>Sub total</span>
        <span className="font-bold">${total}</span>
      </div>
      <hr className=" dark:border-green-500" />
      <div className="flex justify-between items-center">
        <span>Shipping Fee</span>
        <span className="font-bold">$99</span>
      </div>
      <hr className=" dark:border-green-500" />
      <div className="flex justify-between items-center">
        <span>Tax</span>
        <span className="font-bold">${(total * 0.08).toFixed(2)}</span>
      </div>
      <hr className=" dark:border-green-500" />
      <div className="flex justify-between items-center">
        <span className="fs-5 font-bold">Total</span>
        <span className="font-bold">${(total + 99 + total * 0.08).toFixed(2)}</span>
      </div>
      <button
        className="w-full bg-green-600 rounded-md text-white hover:bg-opacity-90 py-2.5"
        onClick={() => Navigate("/checkout")}
      >
        Checkout
      </button>
    </div>
  );
};

SideBar.propTypes = {
  total: PropTypes.number.isRequired,
};

const ProductItem = ({ item, index, onChange, onRemove }) => {
  if (!item) {
    return <p className="text-red-500">Error: Product data not found.</p>;
  }

  return (
    <div className="bg-green-50 rounded-xl flex flex-col md:flex-row items-start gap-2 p-2 md:p-6 mb-4">
      <div className="w-full lg:max-w-[150px] rounded-xl mr-4 md:mr-6 mb-4 lg:mb-0">
        <img src={item.img} alt={item.title} className="max-w-full h-auto rounded-xl mx-auto" />
      </div>
      <div className="flex justify-between w-full">
        <div>
          <div className="text-base md:text-lg hover:text-green-600 mb-4">
            {item.title}
          </div>
          <h3 className="text-xl font-bold text-green-600">Rs. {item.price}</h3>

          <input
            type="number"
            name={`qty-${index}`}
            value={item.qty}
            min="1"
            className="border p-2 rounded"
            onChange={(e) => onChange(e, index)}
          />
        </div>
        <button
          className="w-10 h-10 bg-white text-green-600 inline-flex justify-center items-center rounded-full"
          onClick={() => onRemove(index)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartSec;

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingContext = createContext(null);

export const ShoppingContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cartItems, setCartitems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  useEffect(() => {
    fetchListOfProducts();
    if(localStorage.getItem("cartItems")){
      setCartitems(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, []);

  console.log(cartItems);
  async function fetchListOfProducts() {
    try {
      const apiRes = await fetch("https://dummyjson.com/products");
    const res = await apiRes.json();
    if (res && res.products) {
      setProducts(res.products);
      setLoading(false);
    }
    } catch (error) {
      console.log(error)
    }
  }

  const removeFromCart = (getProductDetail, isFullyRemove) => {
    let cpyExistingCart = [...cartItems];
    const findIndexCart = cpyExistingCart.findIndex(
      (item) => item.id === getProductDetail.id
    );
    if (isFullyRemove) {
      cpyExistingCart.splice(findIndexCart, 1);
    } else {
      cpyExistingCart[findIndexCart] = {
        ...cpyExistingCart[findIndexCart],
        quantity: cpyExistingCart[findIndexCart].quantity - 1,
        totalPrice:
          (cpyExistingCart[findIndexCart].quantity - 1) *
          cpyExistingCart[findIndexCart].price,
      };
    }
    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCart));
    setCartitems(cpyExistingCart);
  };

  const handleAddToCart = (currProductDetails) => {
    console.log(currProductDetails);
    let copyExisting = [...cartItems];
    let findindex = copyExisting.findIndex(
      (cartItem) => cartItem.id === currProductDetails.id
    );
    if (findindex === -1) {
      copyExisting.push({
        ...currProductDetails,
        quantity: 1,
        totalPrice: currProductDetails?.price,
      });
    } else {
      copyExisting[findindex] = {
        ...copyExisting[findindex],
        quantity: copyExisting[findindex].quantity + 1,
        totalPrice:
          (copyExisting[findindex].quantity + 1) *
          copyExisting[findindex].price,
      };
    }
    setCartitems(copyExisting);
    localStorage.setItem("cartItems", JSON.stringify(copyExisting));
    navigate("/cartList");
  };

  return (
    <ShoppingContext.Provider
      value={{
        removeFromCart,
        cartItems,
        handleAddToCart,
        products,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

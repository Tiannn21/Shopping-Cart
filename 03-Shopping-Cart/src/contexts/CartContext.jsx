import { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      return setCart(updatedCart);
    }

    return setCart([...cart, { ...product, quantity: 1 }]);
  }

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  }

  const clearCart = () => {
    setCart([]);
  }

  const aumentCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    const aumentProduct = [...cart];
    aumentProduct[productIndex].quantity += 1;
    setCart(aumentProduct)
  }

  const restarCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    const aumentProduct = [...cart];
    if(aumentProduct[productIndex].quantity!=1){
      aumentProduct[productIndex].quantity -= 1;
      setCart(aumentProduct)
    }
    else
      removeFromCart(product)
    
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, aumentCart, restarCart }}>
      {children}
    </CartContext.Provider>
  );
}

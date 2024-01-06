import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [{ id: 1237456, descripcion: ..., cantidad: 5}]

  function limpiarCarrito() {
    setCart([]);
  }

  function existe(producto) {
    return cart.some((elem) => elem.id === producto.id);
  }

  function agregarProducto(producto, cantidad) {
    // // { id: 1237456, descripcion: ..., marca:...}, 5

    if (existe(producto)) {
      const newCart = cart.map((productInCart) => {
        if (productInCart.id === producto.id) {
          return {
            ...productInCart,
            cantidad: productInCart.cantidad + cantidad,
          };
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...producto, cantidad }]);
    }
  }

  function calcularTotalPrecioCarrito() {
    const total = cart.reduce((acc, element) => {
      return acc + element.cantidad * element.precio;
    }, 0);
    return total;
  }

  function calcularTotalPorId(producto) {
    const aux = cart.find(elem.id === producto.id);
    return aux.cantidad * aux.precio;
  }

  function eliminarProductoPorId(producto) {
    const aux = cart.filter((elem) => elem.id !== producto.id);
    setCart(aux);
  }

  const data = {
    cart,
    limpiarCarrito,
    agregarProducto,
    calcularTotalPrecioCarrito,
    calcularTotalPorId,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

// Carrito
// cart.map(elem => <Card valor={elem.cantidad * elem.precio} />)

import React from 'react'

const Producto = ({ producto, carrito, agregarProducto, productos }) => {

  const { nombre, precio, id } = producto;

  //agregar producto
  const seleccionarProducto = () => {
    const producto = productos.filter(producto => producto.id === id)[0];
    agregarProducto([
      ...carrito,
      producto
    ]);
  }
  //eliminar producto
  const eliminarProducto = id => {
    const productos = carrito.filter(producto => producto.id !== id);
    agregarProducto(productos);
  }
  return (
    <div class="flex mb-5 items-center gap-2 ">
      <p class="text-m py-2 text-black-200 font-bold">{nombre}</p>
      <p class="text-m py-2 text-black-200 font-bold">${precio}</p>
      {productos
        ?
        (
          <button class="bg-purple-800 hover:bg-yellow-500 focus:outline-none rounded-md px-8 py-3 mx-auto block text-white transition duration-500 ease-in-out " onClick={() => seleccionarProducto(id)}>Agregar</button>
        ) : (
          <button class="bg-purple-800 hover:bg-yellow-500 focus:outline-none rounded-md px-10 py-3  text-white transition duration-500 ease-in-out" type='button' onClick={() => eliminarProducto(id)}>Eliminar</button>
        )
      }
    </div>
  );
}
export default Producto;
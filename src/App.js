import React,{useState,Fragment} from 'react'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

export const App = () => {

  const [ productos, setProductos ] = useState([
    { id:1, nombre:'Camisa 1', precio: 50 },
    { id:2, nombre:'Camisa 2', precio: 40 },
    { id:3, nombre:'Camisa 3', precio: 30 },
    { id:4, nombre:'Camisa 4', precio: 20 },
    { id:5, nombre:'Camisa 5', precio: 60 },
    { id:6, nombre:'Camisa 6', precio: 25 },
    { id:7, nombre:'Camisa 7', precio: 45 }
  ]);
  const [carrito,agregarProducto]= useState([]);
  return (
    <Fragment>
      
      <p class="text-xl py-2 text-black-200 font-bold">Tienda Virtual</p>
<div class="flex-col bg-gray-200 h-screen w-screen justify-center font-sans">
  <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div class="bg-gray-500 rounded p-6 m-5 w-full lg:w-3/4 lg:max-w-lg shadow-lg">
      <p class="text-xl py-2 text-black-200 font-bold">Listado de productos</p>
      {productos.map(producto => (
      <Producto 
      key={producto.id}
      producto={producto}
      carrito={carrito}
      productos={productos}
      agregarProducto={agregarProducto}
      />
      ))}
      </div>
      <div class="bg-gray-500 rounded p-6 m-5 w-full lg:w-3/4 lg:max-w-lg shadow-lg">
      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
    </div>
  </div>
</div>
    </Fragment>
  )
}
export default App
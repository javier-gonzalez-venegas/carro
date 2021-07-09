import React from 'react';
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto}) => (
    
        <div className="carrito">
            <p class="text-m py-2 text-black-200 font-bold">Tu carrito de compra</p>
            {carrito.length === 0
            
            ? <p class="text-m py-2 text-black-200 font-bold">No hay elementos en el carrito</p>
            : carrito.map(producto => (
                <Producto 
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                
                />
            ))}
        </div>
        
    );

export default Carrito;


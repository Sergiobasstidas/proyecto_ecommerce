// Añade un item al carrito
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// Eliminar un item del carrito
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}
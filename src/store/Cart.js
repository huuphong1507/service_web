import React, { useReducer, useContext, createContext } from 'react';

const CartStateContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const { title, img, price } = action.payload;
            const newItem = {
                id: new Date().getTime(),
                title,
                img,
                price,
                quantity: 1,
            };
            return [...state, newItem];

        case 'REMOVE':
            const newProducts = [...state];
            newProducts.splice(action.index, 1);
            return newProducts;
        case 'DECREASE':
            const newCartProduct = [...state];
            const productFound = newCartProduct.find((product) => product.id === action.payload);

            if (productFound) {
                productFound.quantity === 1 ? (productFound.quantity = 1) : (productFound.quantity -= 1);
            }

            return newCartProduct;

        case 'INDECREASE':
            const newProductsCart = [...state];
            const foundProduct = newProductsCart.find((product) => product.id === action.payload);

            if (foundProduct) {
                foundProduct.quantity += 1;
            }

            return newProductsCart;
        case 'CHANGE_QUANTITY':
            const quantityProduct = [...state];
            const { id, quantity } = action.payload;
            const foundQuantity = quantityProduct.find((product) => product.id === id);

            console.log(foundQuantity);
            if (foundQuantity) {
                foundQuantity.quantity = +quantity;
            }
            return quantityProduct;
        default:
            throw new Error(`Invalid actions`);
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return <CartStateContext.Provider value={{ state, dispatch }}>{children}</CartStateContext.Provider>;
};

export const useCart = () => useContext(CartStateContext);

import { createContext } from 'react';

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {}, // empty dummy function for auto-completion
}); // ett objekt som innehåller en React-komponent
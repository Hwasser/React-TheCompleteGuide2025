import { createContext, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {}, // empty dummy function for auto-completion
    updateItemQuantity: () => {}, // empty dummy function for auto-completion
}); // ett objekt som innehåller en React-komponent

// Har den utanför då den inte behöver kallas om när komponenten ritas om
function shoppingCartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, // Not needed here because we do not have multiple states
      items: updatedItems,
    };
  }

  if (action.type === 'UPDATE_ITEM') {
            const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
      };
    }

  return state;
}

export default function CartContextProvider({ children }) {
    const [ shoppingCartState, shoppingCartDispatch ] = useReducer(
      shoppingCartReducer,
      {
        items: [],
      }
    );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: 'ADD_ITEM', // namn är bara konvention, inte obligatoriskt
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM',
      payload: {
        productId, // istället för att skriva "productId: productId" kan du bara skriva så här i js-syntax
        amount
      }
    });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>
    {children}
    </CartContext.Provider>
  );
}
export const initialState = {
    basket: [],
};

export const getBasketTotal = (basket) => {
    const total = basket.reduce((total, item) => total + item.price, 0);
    return total
}


export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_CART':
            const index = state.basket.findIndex(basketItem => basketItem.id === action.item.id);


            let newBasket = [...state.basket]

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`cant remove product (id:${action.item.id} as it is not in the basket)`)
            }

            return{
                ...state,
                basket:newBasket
            }
            

        default:
            return state;
    }



}
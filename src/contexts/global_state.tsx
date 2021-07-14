import React, {createContext, Dispatch, useContext, useReducer} from "react";

export interface GlobalStateInterface {
    selectedBrand: string | null;
    selectedModel: string | null;
    selectedType: string | null;
    cart: { id:string, brand: string; model: string, fuel: string, category: string, service: { name: string, price: number } }[]
}

const initialState: GlobalStateInterface = {
    selectedBrand: null,
    selectedModel: null,
    selectedType: null,
    cart: []
};

function reducer(
    state: GlobalStateInterface,
    action: { type: string; payload: any }
): GlobalStateInterface {
    switch (action.type) {
        case "SET_BRAND":
            return {...state, selectedBrand: action.payload};
        case "SET_MODEL":
            return {...state, selectedModel: action.payload};
        case "SET_TYPE":
            return {...state, selectedType: action.payload};
        case "CLEAR_SELECTION":
            return {...state, selectedBrand: null, selectedModel: null, selectedType: null}
        case "ADD_TO_CART": {
            if (state.cart.some(item =>
                item.id === action.payload.id
            )) return state;
            return {...state, cart: [...state.cart, action.payload]}
        }
        case "REMOVE_FROM_CART":
            return {...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload)}
        default:
            return state;
    }
}

export const globalState = createContext<[GlobalStateInterface, any]>([initialState, undefined]);

export function useGlobalState(): [GlobalStateInterface, Dispatch<{ type: string; payload: any; }>] {
    return useContext(globalState);
}

export default function GlobalState({children}: any) {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );
    return (
        <globalState.Provider value={[state, dispatch]}>
            {children}
        </globalState.Provider>
    );
}

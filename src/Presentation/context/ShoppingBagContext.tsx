import { createContext, useEffect, useState } from "react";
import { Product } from "../../Domain/entities/Product";
import { GetShoppingBagUseCase } from "../../Domain/useCases/shopping_bag/GetShoppingBag";
import { SaveShoppingBagUseCase } from "../../Domain/useCases/shopping_bag/SaveShoppingBag";

export interface ShoppingBagContextProps {
    shoppingBag: Product[],
    getShoppingBag(): Promise<void>,
    saveItem(product: Product): Promise<void>,
    deleteItem(product: Product): Promise<void>,
}

export const ShoppingBagContext = createContext({} as ShoppingBagContextProps);

export const ShoppingBagProvider = ( {children}: any ) => {

    const [shoppingBag, setShoppingBag] = useState<Product[]>([])

    useEffect(() => {
        getShoppingBag();
    }, [])

    const getShoppingBag = async(): Promise<void> => {
        const result = await GetShoppingBagUseCase();
        setShoppingBag(result);
    }

    const saveItem = async (product: Product): Promise<void> => {
        const index = shoppingBag.findIndex((p) => p.id == product.id);
        if (index == -1) { // PRODUCTO NO HA SIDO  AGREGADO A LA BOLSA DE COMPRAS -> INSERTARLO A LA LISTA 
            shoppingBag.push(product);
        } else{ //PRODUCTO YA HA SIDO AGREGADO A LA BOLSA DE COMPRAS -> EDITAR LA CANTIDAD
            shoppingBag[index].quantity = product.quantity;
        }

        await SaveShoppingBagUseCase(shoppingBag);
        getShoppingBag();
    }

    const deleteItem = async (product: Product): Promise<void> => {
        const index = shoppingBag.findIndex((p) => p.id == product.id);
        shoppingBag.splice(index);

        await SaveShoppingBagUseCase(shoppingBag);
        getShoppingBag();
    }

    return (
        <ShoppingBagContext.Provider value={{
            shoppingBag,
            getShoppingBag,
            saveItem,
            deleteItem
        }}>
            {children}
        </ShoppingBagContext.Provider>
    )
}
import React, { useContext, useState } from 'react'
// import { Product } from '../../../../Domain/entities/Product'
// import { GetProductsByCategoryUseCase } from '../../../../Domain/useCases/product/GetProductsByCategory';
import { ShoppingBagContext } from '../../../context/ShoppingBagContext';

export const ClientShoppingBagViewModel = () => {

  const { shoppingBag, saveItem, deleteItem} = useContext(ShoppingBagContext);

  // const [products, setProducts] = useState<Product[]>([]);

  // const getProducts = async (idCategory: string) => {
  //   const result = await GetProductsByCategoryUseCase(idCategory);
  //   setProducts(result);
  // }

  return {
    shoppingBag
  }
}

export default ClientShoppingBagViewModel;
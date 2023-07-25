import React, { useContext, useState } from 'react'
// import { Product } from '../../../../Domain/entities/Product'
// import { GetProductsByCategoryUseCase } from '../../../../Domain/useCases/product/GetProductsByCategory';
import { ShoppingBagContext } from '../../../context/ShoppingBagContext';
import { Product } from '../../../../Domain/entities/Product';

export const ClientShoppingBagViewModel = () => {

  const { shoppingBag, saveItem, deleteItem, total} = useContext(ShoppingBagContext);

  // const [products, setProducts] = useState<Product[]>([]);

  const addItem = async (product: Product) => {
    product.quantity = product.quantity! + 1;
    await saveItem(product);
  }

  const subtractItem = async (product: Product) => {
    if (product.quantity! > 1) {
      product.quantity = product.quantity! - 1;
      await saveItem(product);
    }
  }

  return {
    shoppingBag,
    total,
    addItem,
    subtractItem,
    deleteItem,
  }
}

export default ClientShoppingBagViewModel;
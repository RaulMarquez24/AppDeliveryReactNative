import React from 'react'
import { ProductRepositoryImpl } from '../../../Data/repositories/ProductRepository'
import { Product } from '../../entities/Product';
import * as ImagePicker from 'expo-image-picker';

const { remove } = new ProductRepositoryImpl();

export const DeleteProductUseCase = async (product: Product) => {
    return await remove(product);
}

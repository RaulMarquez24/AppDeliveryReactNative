import React, { useState, useContext } from 'react'
import { Product } from '../../../../../Domain/entities/Product'
import { GetProductsByCategoryUseCase } from '../../../../../Domain/useCases/product/GetProductsByCategory'
// import { DeleteProductUseCase } from '../../../../../Domain/useCases/product/DeleteProduct'
import { ProductContext } from '../../../../context/ProductContext'

const AdminProductListViewModel = () => {
    
    const [responseMessage, setResponseMessage] = useState('');
    const { products, getProducts, remove } = useContext( ProductContext );

    const deleteProduct = async (product: Product) => {
        const result = await remove(product);
        setResponseMessage(result.message);
    }

    return {
        products,
        responseMessage,
        deleteProduct,
        getProducts,
    }
}

export default AdminProductListViewModel;
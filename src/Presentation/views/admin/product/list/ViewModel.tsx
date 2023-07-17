import React, { useState, useContext } from 'react'
import { Product } from '../../../../../Domain/entities/Product'
import { GetProductsByCategoryUseCase } from '../../../../../Domain/useCases/product/GetProductsByCategory'
// import { DeleteProductUseCase } from '../../../../../Domain/useCases/product/DeleteProduct'
import { ProductContext } from '../../../../context/ProductContext'

const AdminProductListViewModel = () => {
    
    const [responseMessage, setResponseMessage] = useState('');
    const { products, getProducts } = useContext( ProductContext );

    const deleteProduct = async (idProduct: string) => {
        // const result = await remove(idProduct);
        // setResponseMessage(result.message);
    }

    return {
        products,
        responseMessage,
        deleteProduct,
        getProducts,
    }
}

export default AdminProductListViewModel;
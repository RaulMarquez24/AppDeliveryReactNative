import React, { useState, useContext } from 'react'
import { Category } from '../../../../../Domain/entities/Category'
import { GetAllCategoryUseCase } from '../../../../../Domain/useCases/category/GetAllCategory'
import { DeleteCategoryUseCase } from '../../../../../Domain/useCases/category/DeleteCategory'
import { CategoryContext } from '../../../../context/CategoryContext'

const AdminCategoryListViewModel = () => {
    
    const [responseMessage, setResponseMessage] = useState('');
    const { categories, remove } = useContext( CategoryContext);

    const deleteCategory = async (idCategory: string) => {
        const result = await remove(idCategory);
        setResponseMessage(result.message);
    }

    return {
        categories,
        responseMessage,
        deleteCategory,
    }
}

export default AdminCategoryListViewModel;
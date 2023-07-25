import React, { useContext, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { CreateCategoryUseCase } from '../../../../../Domain/useCases/category/CreateCategory'
import { CategoryContext } from '../../../../context/CategoryContext';

const ClientAddressCreateViewModel = () => {

    const [values, setValues] = useState({
        address: '',
        zipCode: '',
        city: '',
        refPoint: '',
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
    const { create } = useContext(CategoryContext);

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const createCategory = async () => {
        // setLoading(true);
        // const response = await create(values, file!);
        // setLoading(false);
        // setResponseMessage(response.message)
        // resetForm();
    }

    

    const resetForm = async () => {
        // setValues({
        //     name: '',
        //     description: '',
        //     image: '',
        // });
    }

    return {
        ...values,
        onChange,
        loading,
        responseMessage,
        createCategory
    }
}

export default ClientAddressCreateViewModel;
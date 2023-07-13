import React, { useContext, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
// import { CreateProductUseCase } from '../../../../../Domain/useCases/category/CreateProduct'
// import { ProductContext } from '../../../../context/ProductContext';
import { Category } from '../../../../../Domain/entities/Category';

const AdminProductCreateViewModel = (category: Category) => {

    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        image1: '',
        image2: '',
        image3: '',
        idCategory: category.id,
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file1, setFile1] = useState<ImagePicker.ImagePickerAsset>()
    const [file2, setFile2] = useState<ImagePicker.ImagePickerAsset>()
    const [file3, setFile3] = useState<ImagePicker.ImagePickerAsset>()
    // const { create } = useContext(ProductContext);

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const createProduct = async () => {
        console.log('VALUES FORM: ', JSON.stringify(values));
        
        // setLoading(true);
        // const response = await create(values, file!);
        // setLoading(false);
        // setResponseMessage(response.message)
        // resetForm();
    }

    const pickImage = async (numberImage: number) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {

            if (numberImage == 1) {
                onChange('image1', result.assets[0].uri);
                setFile1(result.assets[0]);
            }else if (numberImage == 2) {
                onChange('image2', result.assets[0].uri);
                setFile2(result.assets[0]);
            }else if (numberImage == 3) {
                onChange('image3', result.assets[0].uri);
                setFile3(result.assets[0]);
            }

        }
    }

    const takePhoto = async (numberImage: number) => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            if (numberImage == 1) {
                onChange('image1', result.assets[0].uri);
                setFile1(result.assets[0]);
            }else if (numberImage == 2) {
                onChange('image2', result.assets[0].uri);
                setFile2(result.assets[0]);
            }else if (numberImage == 3) {
                onChange('image3', result.assets[0].uri);
                setFile3(result.assets[0]);
            }
        }
    }

    const resetForm = async () => {
        setValues({
            name: '',
            description: '',
            price: '',
            image1: '',
            image2: '',
            image3: '',
            idCategory: '',
        });
    }

    return {
        ...values,
        onChange,
        takePhoto,
        pickImage,
        loading,
        responseMessage,
        createProduct
    }
}

export default AdminProductCreateViewModel;
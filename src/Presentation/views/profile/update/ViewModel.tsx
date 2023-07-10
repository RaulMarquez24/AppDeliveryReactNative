import React, { useState, useContext } from 'react'
import { ApiDelivery } from '../../../../Data/sources/remote/api/ApiDelivery';
import * as ImagePicker from 'expo-image-picker';
import { SaveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';  
import { UpdateUserUseCase } from '../../../../Domain/useCases/user/UpdateUser';
import { UpdateWithImageUserUseCase } from '../../../../Domain/useCases/user/UpdateWithImageUser';
import { User } from '../../../../Domain/entities/User';
import { ResponseAPIDelivery } from '../../../../Data/sources/remote/models/ResponseApiDelivery';
import { UserContext } from '../../../context/UserContext';

const ProfileUpdateViewModel = (user: User) => {

    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState(user);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
    const { getUserSession } = useUserLocal();
    const { saveUserSession } = useContext( UserContext );

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            onChange('image', result.assets[0].uri);
            setFile(result.assets[0]);
        }
    }

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    // const onChangeInfoUpdate = (name: any, lastname: any, phone: any) => {
    const onChangeInfoUpdate = (name: string, lastname: string, phone: string) => {
        setValues({ ...values, name, lastname, phone });
    }

    const update = async () => {
        if (isValidForm()) {
            setLoading(true);

            let response = {} as ResponseAPIDelivery

            if (values.image?.includes('https://')) {
                response = await UpdateUserUseCase(values);
            }else{
                response = await UpdateWithImageUserUseCase(values, file!);
            }

            setLoading(false);
            console.log('RESULT: ' + JSON.stringify(response));
            if (response.success) {
                // await SaveUserLocalUseCase(response.data);
                // getUserSession();
                saveUserSession(response.data);
            }else{
                setErrorMessage(response.message);
            }
        }
    }

    const isValidForm = (): boolean => {

        if (values.name === '') {
            setErrorMessage('Inserta tu nombre')
            return false
        }
        if (values.lastname === '') {
            setErrorMessage('Inserta tu apellido')
            return false
        }
        // if (values.email === '') {
        //     setErrorMessage('Inserta tu correo electronico')
        //     return false
        // }
        if (values.phone === '') {
            setErrorMessage('Inserta tu telefono')
            return false
        }
        // if (values.password === '') {
        //     setErrorMessage('Inserta la contraseña')
        //     return false
        // }
        // if (values.confirmPassword === '') {
        //     setErrorMessage('Inserta la confirmacion de la contraseña')
        //     return false
        // }
        // if (values.password !== values.confirmPassword) {
        //     setErrorMessage('Las contraseñas no coinciden')
        //     return false
        // }

        return true
    }

    return {
        ...values,
        onChange,
        pickImage,
        update,
        takePhoto,
        onChangeInfoUpdate,
        errorMessage,
        loading,
        user
    }
}

export default ProfileUpdateViewModel;
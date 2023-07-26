import React, { useContext, useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { CategoryContext } from '../../../../context/CategoryContext';
import { CreateAddressUseCase } from '../../../../../Domain/useCases/address/CreateAddress';
import { UserContext } from '../../../../context/UserContext';

const ClientAddressCreateViewModel = () => {

    const [values, setValues] = useState({
        address: '',
        zip_code: 0,
        city: '',
        refPoint: '',
        lat: 0.0,
        lng: 0.0,
        id_user: '',
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user.id != '') {
            onChange('id_user', user.id);
        }
    }, [user])

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const onChangeRefPoint = (refPoint: string, lat: number, lng: number) => {
        setValues({ ...values, refPoint: refPoint, lat: lat, lng: lng});
    }

    const createAddress = async () => {
        console.log('FORMULARIO: ' + JSON.stringify(values));
        setLoading(true);
        const response = await CreateAddressUseCase(values);
        setLoading(false);
        setResponseMessage(response.message)
        resetForm();
    }

    const resetForm = async () => {
        setValues({
            address: '',
            zip_code: 0,
            city: '',
            refPoint: '',
            lat: 0.0,
            lng: 0.0,
            id_user: user.id!,
        });
    }

    return {
        ...values,
        onChange,
        loading,
        responseMessage,
        createAddress,
        onChangeRefPoint
    }
}

export default ClientAddressCreateViewModel;
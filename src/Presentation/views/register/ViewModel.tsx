import React, { useState } from 'react'
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const register = async () => {
        if (isValidForm()) {
            const response = await RegisterAuthUseCase(values);
            console.log('RESULT: ' + JSON.stringify(response));
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
        if (values.email === '') {
            setErrorMessage('Inserta tu correo electronico')
            return false
        }
        if (values.phone === '') {
            setErrorMessage('Inserta tu telefono')
            return false
        }
        if (values.password === '') {
            setErrorMessage('Inserta la contraseña')
            return false
        }
        if (values.confirmPassword === '') {
            setErrorMessage('Inserta la confirmacion de la contraseña')
            return false
        }
        if (values.password !== values.confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden')
            return false
        }

        return true
    }

    return {
        ...values,
        onChange,
        register,
        errorMessage
    }
}

export default RegisterViewModel;
import React, { useContext, useEffect, useState } from 'react'
import { GetByUserAddressUseCase } from '../../../../../Domain/useCases/address/GetByUserAddress';
import { DeleteAddressUseCase } from '../../../../../Domain/useCases/address/DeleteAddress';
import { UserContext } from '../../../../context/UserContext';
import { Address } from '../../../../../Domain/entities/Address';

const ClientAddressListViewModel = () => {

    const [address, setAddress] = useState<Address[]>([])
    const { user, saveUserSession } = useContext(UserContext);
    const [checked, setChecked] = useState('')
    const [responseMessage, setResponseMessage] = useState('');


    useEffect(() => {
        getAddress();
        if (user.address !== null && user.address !== undefined) {
            changeRadioValue(user.address!);
        }
    }, [user])
    

    const changeRadioValue = (address: Address) => {
        setChecked(address.id!);
        user.address = address;
        saveUserSession(user);
    }

    const getAddress = async () => {
        const result = await GetByUserAddressUseCase(user.id!);
        setAddress(result);
    }

    const deleteAddress = async (idAddress: string) => {
        const result = await DeleteAddressUseCase(idAddress);
        setResponseMessage(result.message);
        user.address = undefined;
        saveUserSession(user);
        getAddress();
    }

    return {
        address,
        checked,
        responseMessage,
        getAddress,
        changeRadioValue,
        deleteAddress,
    }
}

export default ClientAddressListViewModel;
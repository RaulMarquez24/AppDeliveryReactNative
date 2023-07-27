import React, { useEffect } from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import useViewModel from './ViewModel'
import { AddressListitem } from './item';
import { RoundedButton } from '../../../../components/RoundedButton';

export const ClientAddressListScreen = () => {

    const { address, checked, responseMessage, getAddress, changeRadioValue, deleteAddress, createOrder } = useViewModel();

    useEffect(() => {
        if (responseMessage !== '') {
            Alert.alert('Nueva acción', responseMessage);
        }
    }, [responseMessage])

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <FlatList
                data={address}
                keyExtractor={(item) => item.id!}
                renderItem={({ item }) =>
                    <AddressListitem
                        address={item}
                        checked={checked}
                        changeRadioValue={changeRadioValue}
                        remove={deleteAddress}
                    />}
            />

            <View style={{ width: '100%', paddingHorizontal: 20, paddingVertical: 20 }}>
                <RoundedButton
                    text='CONTINUAR'
                    onPress={() => createOrder()}
                />
            </View>
        </View>
    )
}

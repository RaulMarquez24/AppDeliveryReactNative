import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import useViewModel from './ViewModel'
import { AddressListitem } from './item';

export const ClientAddressListScreen = () => {

    const { address, checked, getAddress, changeRadioValue } = useViewModel();

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
                    />}
            />
        </View>
    )
}

import React from 'react'
import { Address } from '../../../../../Domain/entities/Address';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { MyColors } from '../../../../theme/AppTheme';

interface Props {
    address: Address,
    checked: string,
    changeRadioValue: (address: Address) => void,
    remove: (id: string) => void,
}

export const AddressListitem = ({ address, checked, changeRadioValue, remove }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <View style={styles.infoContent}>
                    <RadioButton
                        value={address.id!}
                        status={checked === address.id ? 'checked' : 'unchecked'}
                        onPress={() => changeRadioValue(address)}
                        color='#23a9f2'
                    />

                    <View style={styles.infoAddress}>
                        <Text style={styles.address}>{address.address}</Text>
                        <Text style={styles.city}>{address.city}, {address.zip_code}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => remove(address.id!)}>
                    <Image
                        style={styles.actionImage}
                        source={require('../../../../../../assets/trash.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.divider}></View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    info: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    infoContent:{
        flexDirection: 'row',
    },
    infoAddress: {
        marginLeft: 5,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#f2f2f2',
        marginTop: 10,
    },
    address: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    city: {
        fontSize: 12,
    },
    actionImage: {
        width: 25,
        height: 25,
        // marginVertical: 2,
    },
});
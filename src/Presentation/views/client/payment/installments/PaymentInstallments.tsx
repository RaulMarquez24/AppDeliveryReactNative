import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator'
import DropDownPicker from 'react-native-dropdown-picker'
import useViewModel from './ViewModel'
import styles from './Styles'
import { RoundedButton } from '../../../../components/RoundedButton'

interface Props extends StackScreenProps<ClientStackParamList, 'ClientPaymentInstallmentsScreen'> { };

export const ClientPaymentInstallmentsScreen = ({ navigation, route }: Props) => {

    const { cardToken } = route.params;
    const { open, value, items, installments, setOpen, setValue, setItems, getInstallments } = useViewModel(cardToken);

    useEffect(() => {
        getInstallments();
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.textNumberInstallments}>Elije el número de cuotas</Text>
            <View style={styles.dropdownContainer}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>

            <View style={styles.buttonContainer}>
                <RoundedButton
                    text='PROCESAR PAGO'
                    onPress={() => { }}
                />
            </View>
        </View>
    )
}

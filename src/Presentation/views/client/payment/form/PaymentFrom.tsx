import React, { useEffect } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'
import styles from './Styles'
import useViewModel from './ViewModel'
import CreditCard from 'react-native-credit-card-form-ui'
import { RoundedButton } from '../../../../components/RoundedButton'
import { MyColors } from '../../../../theme/AppTheme'
import DropDownPicker from 'react-native-dropdown-picker'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { StackScreenProps } from '@react-navigation/stack'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator'

interface Props extends StackScreenProps<ClientStackParamList, 'ClientPaymentFormScreen'> { };

export const ClientPaymentFormScreen = ({ navigation, route }: Props) => {

    const {
        creditCardRef,
        identificationTypeList,
        identificationNumber,
        open,
        value,
        items,
        cardToken,
        handleSubmit,
        getIdentificationTypes,
        setOpen,
        setValue,
        setItems,
        onChange,
        createCardToken,
    } = useViewModel();

    useEffect(() => {
        getIdentificationTypes();
    }, [])

    useEffect(() => {
        if (cardToken !== undefined && cardToken !== null) {
            navigation.navigate('ClientPaymentInstallmentsScreen', { cardToken: cardToken })
        }
    }, [cardToken])

    return (
        <View style={styles.container}>

            {/* INTRODUCIR TARJETA CON VALORES CORRECTOS SI NO CRASHEA */}
            <View style={styles.form}>
                <CreditCard
                    ref={creditCardRef}
                    background={'#e2e2e2'}
                    textColor='#000'
                    labels={{
                        holder: 'Titular de la tarjeta',
                        cvv: 'Código de seguridad',
                        expiration: 'Fecha de vencimiento'
                    }}
                    placeholderTextColor='gray'
                    placeholders={{
                        number: '0000 0000 0000 0000',
                        holder: 'TITULAR DE LA TARJETA',
                        expiration: 'MM/YYYY',
                        cvv: '000',
                    }}
                />
            </View>
            
                <View style={styles.dropDown}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />

                    <CustomTextInput
                        image={require('../../../../../../assets/document.png')}
                        placeholder='Numero de identificación'
                        value={identificationNumber}
                        keyboardType='default'
                        property='identificationNumber'
                        onChangeText={onChange}
                    />
                </View>

            <View style={styles.button}>
                <RoundedButton text='CONTINUAR' onPress={() => handleSubmit()} />
            </View>
        </View>
    )
}

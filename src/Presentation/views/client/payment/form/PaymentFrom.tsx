import React, { useEffect } from 'react'
import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native'
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
        payMethod,
        loading,
        stripePaymentData,
        paySucces,
        handleSubmit,
        getIdentificationTypes,
        setOpen,
        setValue,
        setItems,
        onChange,
        createCardToken,
        changeMethod,
    } = useViewModel();

    useEffect(() => {
        getIdentificationTypes();
    }, [])

    useEffect(() => {
        if (cardToken !== undefined && cardToken !== null && payMethod === 'mercadopago') {
            navigation.navigate('ClientPaymentInstallmentsScreen', { cardToken: cardToken })
        }
    }, [cardToken])

    useEffect(() => {
        if (stripePaymentData !== undefined && stripePaymentData !== null) {
            navigation.replace('ClientPaymentStatusScreen', { stripePaymentData: stripePaymentData, paySucces: paySucces })
        }
    }, [stripePaymentData])

    return (
        <View style={styles.container}>

            <View style={styles.payMethod}>
                <TouchableOpacity style={styles.payMethodImage} onPress={() => changeMethod('mercadopago')}>
                    <Image
                        style={styles.payMethodImage}
                        source={require('../../../../../../assets/mercadopago.jpg')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.payMethodImage} onPress={() => changeMethod('stripe')}>
                    <Image
                        style={styles.payMethodImage}
                        source={require('../../../../../../assets/stripe.png')}
                    />
                </TouchableOpacity>
            </View>

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
            
            {
                payMethod === 'mercadopago' &&

                <View style={styles.dropDown}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>
            }

            {
                payMethod === 'mercadopago' &&

                <View style={styles.textMercadoPago}>
                    <CustomTextInput
                        image={require('../../../../../../assets/document.png')}
                        placeholder='Numero de identificación'
                        value={identificationNumber}
                        keyboardType='default'
                        property='identificationNumber'
                        onChangeText={onChange}
                    />
                </View>
            }

            <View style={styles.button}>
                <TouchableOpacity onPress={() => handleSubmit()} style={styles.check}>
                    <Image
                        style={styles.check}
                        source={require('../../../../../../assets/checked.png')}
                    />
                </TouchableOpacity>
                {/* <RoundedButton text='CONTINUAR' onPress={() => handleSubmit()} /> */}
            </View>

            {
                loading &&
                <ActivityIndicator
                style={styles.loading}
                size="large" 
                color={MyColors.primary} />
            }

        </View>
    )
}

import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native'
import styles from './Styles'
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { RoundedButton } from '../../../../components/RoundedButton'
import ModalPickImage from '../../../../components/ModalPickImage'
import { MyColors, MyStyles } from '../../../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator'

interface Props extends StackScreenProps<ClientStackParamList, 'ClientAddressCreateScreen'>{};

export const ClientAddressCreateScreen = ({navigation, route}: Props) => {

    const { address, zip_code, city, refPoint, responseMessage, loading, onChange, createAddress, onChangeRefPoint } = useViewModel();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (route.params?.refPoint) {
            onChangeRefPoint(route.params?.refPoint, route.params?.latitude, route.params?.longitude);
        }
    }, [route.params?.refPoint])

    useEffect(() => {
        if (responseMessage !== '') {
            Alert.alert('Crear categoria', responseMessage);
        }
    }, [responseMessage])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer}
                onPress={() => setModalVisible(true)}>
                <Image
                    style={styles.image}
                    source={require('../../../../../../assets/map.png')}
                />

            </TouchableOpacity>

            <View style={styles.form}>
                <CustomTextInput
                    placeholder='Calle, numero, puerta...'
                    image={require('../../../../../../assets/location.png')}
                    keyboardType='default'
                    property='address'
                    value={address}
                    onChangeText={onChange}
                />

                <CustomTextInput
                    placeholder='Código postal'
                    image={require('../../../../../../assets/zip_code.png')}
                    keyboardType='default'
                    property='zip_code'
                    value={zip_code === 0 ? '' : zip_code.toString()} // Verifica si zip_code es igual a 0 y establece una cadena vacía en su lugar
                    onChangeText={onChange}
                />

                <CustomTextInput
                    placeholder='Ciudad'
                    image={require('../../../../../../assets/neighborhood.png')}
                    keyboardType='default'
                    property='city'
                    value={city}
                    onChangeText={onChange}
                />

                <TouchableOpacity onPress={() => navigation.navigate('ClientAddressMapScreen')}>
                    <CustomTextInput
                        placeholder='Punto de referencia'
                        image={require('../../../../../../assets/ref_point.png')}
                        keyboardType='default'
                        property='refPoint'
                        value={refPoint}
                        onChangeText={onChange}
                        editable={false}
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.buttonContainer}>
                <RoundedButton
                    text='CREAR DIRECCION'
                    onPress={() => { createAddress() }}
                />
            </View>

            {
                loading &&
                <ActivityIndicator
                    style={MyStyles.loading}
                    size="large"
                    color={MyColors.primary} />
            }

        </View>
    )
}

import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native'
import styles from './Styles'
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { RoundedButton } from '../../../../components/RoundedButton'
import ModalPickImage from '../../../../components/ModalPickImage'
import { MyColors, MyStyles } from '../../../../theme/AppTheme';

export const ClientAddressCreateScreen = () => {

    const { address, city, refPoint, responseMessage, loading, onChange, createCategory } = useViewModel();
    const [modalVisible, setModalVisible] = useState(false);

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
                    placeholder='Nombre de la dirección'
                    image={require('../../../../../../assets/categories.png')}
                    keyboardType='default'
                    property='address'
                    value={address}
                    onChangeText={onChange}
                />

                <CustomTextInput
                    placeholder='Barrio'
                    image={require('../../../../../../assets/description.png')}
                    keyboardType='default'
                    property='city'
                    value={city}
                    onChangeText={onChange}
                />

                <CustomTextInput
                    placeholder='Punto de referencia'
                    image={require('../../../../../../assets/description.png')}
                    keyboardType='default'
                    property='refPoint'
                    value={refPoint}
                    onChangeText={onChange}
                />
            </View>
            <View style={styles.buttonContainer}>
                <RoundedButton
                    text='CREAR DIRECCION'
                    onPress={() => { createCategory() }}
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

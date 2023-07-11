import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Styles'
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { RoundedButton } from '../../../../components/RoundedButton'

export const AdminCategoryCreateScreen = () => {

    const { name, description, image, onChange } = useViewModel();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContaine}>
                <Image
                    style={styles.image}
                    source={require('../../../../../../assets/image_new.png')}
                />
            </TouchableOpacity>

            <View style={styles.form}>
                <CustomTextInput
                    placeholder='Nombre de la categoria'
                    image={require('../../../../../../assets/categories.png')}
                    keyboardType='default'
                    property='name'
                    value={name}
                    onChangeText={onChange}
                />

                <CustomTextInput
                    placeholder='Descripción'
                    image={require('../../../../../../assets/description.png')}
                    keyboardType='default'
                    property='description'
                    value={description}
                    onChangeText={onChange}
                />
            </View>

            <View style={styles.buttonContainer}>
                <RoundedButton
                    text='CREAR CATEGORIA'
                    onPress={() => { }}
                />
            </View>

        </View>
    )
}

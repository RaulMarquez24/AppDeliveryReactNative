import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native'
import styles from './Styles'
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { RoundedButton } from '../../../../components/RoundedButton'
import ModalPickImage from '../../../../components/ModalPickImage'
import { MyColors, MyStyles } from '../../../../theme/AppTheme';
import { Category } from '../../../../../Domain/entities/Category';
import { StackScreenProps } from '@react-navigation/stack'
import { CategoryStackParamList } from '../../../../navigator/AdminCategoryNavigator';

interface Props extends StackScreenProps<CategoryStackParamList, 'AdminCategoryUpdateScreen'> { };

export const AdminCategoryUpdateScreen = ({ navigation, route }: Props) => {

    const { category } = route.params;
    const { name, description, image, responseMessage, loading, takePhoto, pickImage, onChange, updateCategory } = useViewModel(category);
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
                {
                    image == ''
                        ?
                        <Image
                            style={styles.image}
                            source={require('../../../../../../assets/image_new.png')}
                        />
                        : <Image source={{ uri: image }} style={styles.image} />
                }

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
                <View style={styles.buttonContainer}>
                    <RoundedButton
                        text='EDITAR CATEGORIA'
                        onPress={() => { updateCategory() }}
                    />
                </View>
            </View>

            <ModalPickImage
                openGallery={pickImage}
                openCamera={takePhoto}
                modalUseState={modalVisible}
                setModalUseState={setModalVisible}
            />

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

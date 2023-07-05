import React, { useEffect, useState } from 'react'
import { Alert, Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import useViewModel from './ViewModel';
import styles from './Styles';
import ModalPickImage from '../../components/ModalPickImage';


export const RegisterScreen = () => {

    const { name, lastname, email, phone, image, password, confirmPassword, errorMessage, onChange, register, pickImage, takePhoto } = useViewModel();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (errorMessage != '') {
            Alert.alert('Error', errorMessage);
        }
    }, [errorMessage])


    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/chef.jpg')} style={styles.imageBackground} />

            {/* Logo App */}
            <View style={styles.logoContainer}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>   
                    {
                        image == ''
                        ? <Image source={require('../../../../assets/user_image.png')} style={styles.logoImg} />
                        : <Image source={{ uri: image }} style={styles.logoImg} />
                    }             
                </TouchableOpacity>
                <Text style={styles.logoTxt}>SELECCIONA UNA IMAGEN</Text>
            </View>

            {/* Formulario */}
            <View style={styles.form}>

                <ScrollView>

                    <Text style={styles.formText}>REGISTRARSE</Text>

                    <CustomTextInput
                        image={require('../../../../assets/user.png')}
                        placeholder='Nombre'
                        value={name}
                        keyboardType='default'
                        property='name'
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/my_user.png')}
                        placeholder='Apellidos'
                        value={lastname}
                        keyboardType='default'
                        property='lastname'
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/email.png')}
                        placeholder='Correo electronico'
                        value={email}
                        keyboardType='email-address'
                        property='email'
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/phone.png')}
                        placeholder='Telefono'
                        value={phone}
                        keyboardType='numeric'
                        property='phone'
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/password.png')}
                        placeholder='Contraseña'
                        value={password}
                        keyboardType='default'
                        secureTextEntry={true}
                        property='password'
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        image={require('../../../../assets/confirm_password.png')}
                        placeholder='Confirmar Contraseña'
                        value={confirmPassword}
                        keyboardType='default'
                        secureTextEntry={true}
                        property='confirmPassword'
                        onChangeText={onChange}
                    />

                    <View style={{ marginTop: '8%', }}>
                        <RoundedButton text='ENTRAR' onPress={() => register()} />
                    </View>

                </ScrollView>
            </View>

            <ModalPickImage
                openGallery={ pickImage }
                openCamera={ takePhoto }
                modalUseState={ modalVisible }
                setModalUseState={ setModalVisible }
            />
        </View>
    );
}
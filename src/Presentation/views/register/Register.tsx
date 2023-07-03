import React from 'react'
import { Image, Text, View, } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import useViewModel from './ViewModel';
import styles from './Styles';


export const RegisterScreen = () => {

    const { name, lastname, email, phone, password, confirmPassword, onChange, register } = useViewModel();

    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/chef.jpg')} style={styles.imageBackground} />

            {/* Logo App */}
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/user_image.png')} style={styles.logoImg} />
                <Text style={styles.logoTxt}>SELECCIONA UNA IMAGEN</Text>
            </View>

            {/* Formulario */}
            <View style={styles.form}>
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

            </View>

        </View>
    );
}
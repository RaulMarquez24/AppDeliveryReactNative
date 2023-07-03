import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import styles from './Styles';

export const HomeScreen = () => {

    const { email, password, onChange } = useViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/chef.jpg')} style={styles.imageBackground} />

            {/* Logo App */}
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/logo.png')} style={styles.logoImg} />
                <Text style={styles.logoTxt}>FOOD APP</Text>
            </View>

            {/* Formulario */}
            <View style={styles.form}>
                <Text style={styles.formText}>INGRESAR</Text>

                <CustomTextInput
                    image={require('../../../../assets/email.png')}
                    placeholder='Correo electronico'
                    value={email}
                    keyboardType='email-address'
                    property='email'
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

                <View style={{ marginTop: '8%', }}>
                    <RoundedButton text='ENTRAR' onPress={() => {
                        console.log('Email: ', email);
                        console.log('Password: ', password);
                    }} />
                </View>

                <View style={styles.formRegister}>
                    <Text>No tienes cuenta?</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formRegisterTextLink}>Registrate</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

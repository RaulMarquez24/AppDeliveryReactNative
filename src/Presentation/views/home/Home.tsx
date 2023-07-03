import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Alert, Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';

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

                <View style={styles.formInput}>
                    <Image source={require('../../../../assets/email.png')} style={styles.formImgInput} />
                    <TextInput style={styles.formTextInput} 
                        placeholder='Correo electronico' 
                        keyboardType='email-address' 
                        value={ email }
                        onChangeText={ text => onChange('email', text) }
                    />
                </View>

                <View style={styles.formInput}>
                    <Image source={require('../../../../assets/password.png')} style={styles.formImgInput} />
                    <TextInput style={styles.formTextInput} 
                        placeholder='Contraseña' 
                        secureTextEntry={true}
                        value={ password }
                        onChangeText={ text => onChange('password', text) }
                    />
                </View>

                <View style={{ marginTop: '8%', }}>
                    <RoundedButton text='ENTRAR' onPress={() => {
                        console.log('Email: ',email);
                        console.log('Password: ',password);
                    }} />
                </View>

                <View style={styles.formRegister}>
                    <Text>No tienes cuenta?</Text>

                    <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formRegisterTextLink}>Registrate</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%',
    },

    form: {
        width: '100%',
        height: '40%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
        justifyContent: 'center',
    },

    formText: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    formInput: {
        flexDirection: 'row',
        marginTop: '7%',
    },

    formImgInput: {
        width: 25,
        height: 25,
        marginTop: '1%',
    },

    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa',
        marginLeft: 15,
    },

    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '5%',
    },

    formRegisterTextLink: {
        fontStyle: 'italic',
        color: MyColors.primary,
        textDecorationLine: "underline",
        fontWeight: 'bold',
        marginLeft: 10,
    },

    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%',
    },

    logoImg: {
        width: 100,
        height: 100,
    },

    logoTxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
});

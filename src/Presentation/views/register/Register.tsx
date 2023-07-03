import React from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';

export const RegisterScreen = () => {

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

                <View style={styles.formInput}>
                    <Image source={require('../../../../assets/user.png')} style={styles.formImgInput} />
                    <TextInput style={styles.formTextInput} placeholder='Nombre'/>
                </View>

                <View style={styles.formInput}>
                    <Image source={require('../../../../assets/my_user.png')} style={styles.formImgInput} />
                    <TextInput style={styles.formTextInput} placeholder='Apellidos'/>
                </View>

                <View style={styles.formInput}>
                    <Image source={require('../../../../assets/email.png')} style={styles.formImgInput} />
                    <TextInput style={styles.formTextInput} placeholder='Correo electronico' keyboardType='email-address' />
                </View>

                <View style={styles.formInput}>
                    <Image source={require('../../../../assets/phone.png')} style={styles.formImgInput} />
                    <TextInput style={styles.formTextInput} placeholder='Telefono' keyboardType='numeric' />
                </View>

                <View style={styles.formInput}>
                    <Image source={require('../../../../assets/password.png')} style={styles.formImgInput} />
                    <TextInput style={styles.formTextInput} placeholder='Contraseña' secureTextEntry={true} />
                </View>

                <View style={styles.formInput}>
                    <Image source={require('../../../../assets/confirm_password.png')} style={styles.formImgInput} />
                    <TextInput style={styles.formTextInput} placeholder='Confirmar Contraseña' secureTextEntry={true} />
                </View>

                <View style={{ marginTop: '8%', }}>
                    <RoundedButton text='ENTRAR' onPress={() => Alert.alert('button pressed')} />
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
        height: '72%',
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
        top: '5%',
        alignItems: 'center',
    },

    logoImg: {
        width: 85,
        height: 85,
    },

    logoTxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
    },
});


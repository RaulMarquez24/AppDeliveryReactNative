import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View, TouchableOpacity, Alert } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator'
import useViewModel from './ViewModel';
import styles from './Styles';
import * as Notifications from 'expo-notifications';
import { NotificationPush } from '../../utils/NotificationPush';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> { };

export const HomeScreen = ({ navigation, route }: Props) => {

    const { email, password, errorMessage, user, onChange, login, updateNotificationToken, } = useViewModel();

    const { notification, notificationListener, responseListener, setNotification, registerForPushNotificationsAsync } = NotificationPush();

    useEffect(() => {
        if (errorMessage != '') {
            Alert.alert('Error', errorMessage);
        }
    }, [errorMessage])

    useEffect(() => {
        if (user?.id !== null && user?.id !== undefined && user?.id !== '') {

            registerForPushNotificationsAsync().then(token => {
                
                console.log('TOKEN: ' + token);

                updateNotificationToken(user?.id!, token! as any);
                // updateNotificationToken(user?.id!, 'hola');


                if (user.roles?.length! > 1) {
                    navigation.replace('RolesScreen');
                } else {
                    navigation.replace('ClientTabsNavigator');
                }
            });
    
            notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
                setNotification(notification);
            });
    
            responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
                console.log(response);
            });
    
            return () => {
                Notifications.removeNotificationSubscription(notificationListener.current);
                Notifications.removeNotificationSubscription(responseListener.current);
            };
        }
    }, [user])

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
                    <RoundedButton text='ENTRAR' onPress={() => login()} />
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

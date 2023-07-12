import React, { useEffect } from 'react'
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import useViewModel from './ViewModel';
import styles from './Styles';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigator/MainStackNavigator'
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../../components/RoundedButton';

export const ProfileInfoScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { user, removeUserSession } = useViewModel();

    useEffect(() => {
        if (user.id === '') {
            navigation.replace('HomeScreen');
        }
    }, [user])
    

    return (
        <View style={styles.container}>

            <Image source={require('../../../../../assets/city.jpg')} style={styles.imageBackground} />

            <TouchableOpacity style={styles.logout}
                onPress={() => {
                    removeUserSession();
                }}>
                    <Image source={require('../../../../../assets/logout.png')} style={styles.logoutImg} />
            </TouchableOpacity>

            {/* Logo App */}
            <View style={styles.logoContainer}>
                { 
                user?.image !== '' 
                    && 
                <Image source={{ uri: user?.image }} style={styles.logoImg} />
                    
                }
            </View>

            {/* Formulario */}
            <View style={styles.form}>
                <View style={styles.formInfo}>
                    <Image
                        source={require('../../../../../assets/user.png')}
                        style={styles.formImg}
                    />
                    <View style={styles.formContent}>
                        <Text>{user?.name} {user?.lastname}</Text>
                        <Text style={styles.formTextDescription}>Nombre del usuario</Text>
                    </View>
                </View>
                <View style={{ ...styles.formInfo, marginTop: 25 }}>
                    <Image
                        source={require('../../../../../assets/email.png')}
                        style={styles.formImg}
                    />
                    <View style={styles.formContent}>
                        <Text>{user?.email}</Text>
                        <Text style={styles.formTextDescription}>Correo electrónico</Text>
                    </View>
                </View>

                <View style={{ ...styles.formInfo, marginTop: 25, marginBottom: 70, }}>
                    <Image
                        source={require('../../../../../assets/phone.png')}
                        style={styles.formImg}
                    />
                    <View style={styles.formContent}>
                        <Text>{user?.phone}</Text>
                        <Text style={styles.formTextDescription}>Teléfono</Text>
                    </View>
                </View>

                <RoundedButton
                    onPress={()=>{
                        navigation.navigate('ProfileUpdateScreen', {user: user!})
                    }}
                    text='ACTUALIZAR INFORMACION'
                />
            </View>
        </View>
    )
}

import React, { useEffect } from 'react'
import { View, Text, Alert, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import styles from "./Styles";
import useViewModel from "./ViewModel";
import stylesMap from "./StylesMap"
import { RoundedButton } from '../../../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientAddressMapScreen'>{};

export const ClientAddressMapScreen = ({navigation, route}: Props) => {

    const { messagePermissions, postion, mapRef, name, latitude, longitude, onRegionChangeComplete} = useViewModel();

    useEffect(() => {
        if (messagePermissions != '') {
            Alert.alert('Permisos', messagePermissions);
        }
    }, [messagePermissions])


    return (
        <View style={styles.container}>
            <MapView
                style={{ height: '100%', width: '100%' }}
                provider={PROVIDER_GOOGLE} // QUITAR SI EN APPLE SE QUIERE EL MAPA DE APPLE
                ref={mapRef}
                customMapStyle={ stylesMap }
                onRegionChangeComplete={ (region) => {
                    onRegionChangeComplete(region.latitude, region.longitude);
                }} // CADA VEZ QUE TERMINO DE MOVER EL CURSOR POR EL MAPA
            />

            <Image
                style={styles.imageLocation}
                source={require('../../../../../../assets/location_home.png')}
            />

            <View style={styles.refPoint}>
                <Text style={styles.refPointText}>{name}</Text>
            </View>

            <View style={styles.buttonRefPoint}>
                <RoundedButton
                    text='SELECCIONA PUNTO'
                    onPress={()=> {
                        navigation.navigate({
                            name: 'ClientAddressCreateScreen',
                            merge: true,
                            params: { refPoint: name, latitude:latitude ,longitude: longitude}
                        })
                    }}
                />
            </View>

        </View>
    )
}

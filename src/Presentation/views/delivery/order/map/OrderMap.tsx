import React, { useEffect } from 'react'
import { View, Text, Alert, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import styles from "./Styles";
import useViewModel from "./ViewModel";
import stylesMap from "./StylesMap"
import { RoundedButton } from '../../../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';
import { DeliveryOrderStackParamList } from '../../../../navigator/DeliveryOrderStackNavigator';

interface Props extends StackScreenProps<DeliveryOrderStackParamList, 'DeliveryOrderMapScreen'> { };

export const DeliveryOrderMapScreen = ({ navigation, route }: Props) => {

    const { order } = route.params;
    const { messagePermissions, postion, mapRef, name, latitude, longitude, onRegionChangeComplete } = useViewModel();

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
                customMapStyle={stylesMap}
            />

            <Image
                style={styles.imageLocation}
                source={require('../../../../../../assets/location_home.png')}
            />

            <View style={styles.info}>

                <View style={styles.infoRow}>
                    <View style={styles.infoText}>
                        <Text style={styles.infoTitle}>Ciudad</Text>
                        <Text style={styles.infoDescription}>{order.address?.city} - {order.address?.zip_code}</Text>
                    </View>
                    <Image
                        style={styles.infoImage}
                        source={require('../../../../../../assets/location.png')}
                    />
                </View>

                <View style={styles.infoRow}>
                    <View style={styles.infoText}>
                        <Text style={styles.infoTitle}>Dirección</Text>
                        <Text style={styles.infoDescription}>{order.address?.address}</Text>
                    </View>
                    <Image
                        style={styles.infoImage}
                        source={require('../../../../../../assets/location_home.png')}
                    />
                </View>

                <View style={styles.divider}></View>

                <View style={styles.infoClient}>
                    <Image 
                        style={styles.imageClient}
                        source={{ uri: order.client?.image }}
                    />
                    <Text style={styles.nameClient}>{order.client?.name} {order.client?.lastname}</Text>
                    <Image 
                        style={styles.imagePhone}
                        source={require('../../../../../../assets/phone.png')}
                    />
                </View>

                <View style={styles.buttonRefPoint}>
                    <RoundedButton
                        text='ENTREGAR PEDIDO'
                        onPress={() => { }}
                    />
                </View>
            </View>

        </View>
    )
}

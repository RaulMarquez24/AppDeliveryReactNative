import React, { useEffect } from 'react'
import { View, Text, Alert, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import styles from "./Styles";
import useViewModel from "./ViewModel";
import stylesMap from "./StylesMap"
import { RoundedButton } from '../../../../components/RoundedButton';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';
import { ClientOrderStackParamList } from '../../../../navigator/ClientOrderStackNavigator';
import MapViewDirections from 'react-native-maps-directions';
import { MyColors } from '../../../../theme/AppTheme';
import { GOOGLE_MAPS_APIKEY } from '../../../../constant/GoogleMapApiKey';

interface Props extends StackScreenProps<ClientOrderStackParamList, 'ClientOrderMapScreen'> { };

export const ClientOrderMapScreen = ({ navigation, route }: Props) => {

    const { order } = route.params;
    const { messagePermissions, position, mapRef, origin, responseMessage, socket, positionOnce } = useViewModel(order);

    useEffect(() => {
        if (messagePermissions != '') {
            Alert.alert('Permisos', messagePermissions);
        }
    }, [messagePermissions])

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', () => {
            console.log('EJECUTE: BeforeRemove');
            socket.disconnect();
        });
    }, [navigation])

    useEffect(() => {
        if (responseMessage !== '') {
            Alert.alert('Entregar pedido', responseMessage, [{ text: 'OK', onPress: () => { navigation.pop(2) } }]);
        }
    }, [responseMessage, navigation]);

    return (
        <View style={styles.container}>
            <MapView
                style={{ height: '64%', width: '100%', position: 'absolute', top: 0, }}
                provider={PROVIDER_GOOGLE} // QUITAR SI EN APPLE SE QUIERE EL MAPA DE APPLE
                ref={mapRef}
                customMapStyle={stylesMap}
                zoomControlEnabled={true}
            >
                {
                    position.latitude !== 0.0 &&
                    <Marker coordinate={position}>
                        <Image
                            style={styles.markerImage}
                            source={require('../../../../../../assets/delivery.png')}
                        />
                    </Marker>
                }
                {
                    order.address !== undefined &&
                    <Marker coordinate={{ latitude: order.address.lat, longitude: order.address.lng }}>
                        <Image
                            style={styles.markerImage}
                            source={require('../../../../../../assets/home.png')}
                        />
                    </Marker>
                }
                {
                    (origin.latitude !== 0.0 && positionOnce.latitude !== 0.0) &&
                    <MapViewDirections
                        origin={origin}
                        destination={positionOnce}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={3}
                        strokeColor={MyColors.primary}
                    />
                }
            </MapView>

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
                        source={{ uri: order.delivery?.image }}
                    />
                    <Text style={styles.nameClient}>{order.delivery?.name} {order.delivery?.lastname}</Text>
                    <Image
                        style={styles.imagePhone}
                        source={require('../../../../../../assets/phone.png')}
                    />
                </View>

            </View>

            <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
                <Image
                    style={styles.back}
                    source={require('../../../../../../assets/back.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

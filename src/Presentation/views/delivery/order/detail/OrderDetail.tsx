import React, { useEffect } from 'react'
import { View, Text, FlatList, Image, Button, Alert } from 'react-native';
import styles from './Styles'
import useViewModel from './ViewModel'
import { StackScreenProps } from '@react-navigation/stack'
import { DeliveryOrderStackParamList } from '../../../../navigator/DeliveryOrderStackNavigator'
import { OrderDetailItem } from './Item'
import { DateFormatter } from '../../../../utils/DateFormatter';
import { RoundedButton } from '../../../../components/RoundedButton'

interface Props extends StackScreenProps<DeliveryOrderStackParamList, 'DeliveryOrderDetailScreen'> { };

export const DeliveryOrderDetailScreen = ({ navigation, route }: Props) => {

    const { order } = route.params;
    const { total, open, value, items, responseMessage, getTotal, setOpen, setValue, setItems, updateToOnTheWayOrder } = useViewModel(order);

    useEffect(() => {
        if (responseMessage !== '') {
            if (responseMessage !== 'Selecciona el repartidor') {
                Alert.alert('Despachar orden', responseMessage, [{ text: 'OK', onPress: () => { navigation.goBack() } }]);
            } else {
                Alert.alert('Despachar orden', responseMessage);
            }
        }
    }, [responseMessage, navigation]);


    useEffect(() => {
        if (total == 0.0) {
            getTotal();
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.products}>

                <FlatList
                    data={order.products}
                    keyExtractor={(item) => item.id!}
                    renderItem={({ item }) => <OrderDetailItem product={item} />}
                />

            </View>
            <View style={styles.info}>
                <View style={styles.infoRow}>
                    <View style={styles.infoText}>
                        <Text style={styles.infoTitle}>Fecha del pedido</Text>
                        <Text style={styles.infoDescription}>{DateFormatter(order.timestamp!)}</Text>
                    </View>
                    <Image
                        style={styles.infoImage}
                        source={require('../../../../../../assets/reloj.png')}
                    />
                </View>
                <View style={styles.infoRow}>
                    <View style={styles.infoText}>
                        <Text style={styles.infoTitle}>Cliente y Teléfono</Text>
                        <Text style={styles.infoDescription}>{order.client?.name} {order.client?.lastname} - {order.client?.phone}</Text>
                    </View>
                    <Image
                        style={styles.infoImage}
                        source={require('../../../../../../assets/user.png')}
                    />
                </View>
                <View style={styles.infoRow}>
                    <View style={styles.infoText}>
                        <Text style={styles.infoTitle}>Dirección de entrega</Text>
                        <Text style={styles.infoDescription}>{order.address?.address} - {order.address?.zip_code}, {order.address?.city}</Text>
                    </View>
                    <Image
                        style={styles.infoImage}
                        source={require('../../../../../../assets/location.png')}
                    />
                </View>

                <View style={styles.infoRow}>
                    <View style={styles.infoText}>
                        <Text style={styles.infoTitle}>REPARTIDOR ASIGNADO</Text>
                        <Text style={styles.infoDescription}>{order.delivery?.name} {order.delivery?.lastname}</Text>
                    </View>
                    <Image
                        style={styles.infoImage}
                        source={require('../../../../../../assets/my_user.png')}
                    />
                </View>

                <View style={styles.totalInfo}>
                    <Text style={styles.total}>TOTAL: {total}€</Text>
                    <View style={styles.button}>
                        {
                            order.status === 'DESPACHADO' 
                            ? <RoundedButton text='INICIAR ENTREGA' onPress={() => updateToOnTheWayOrder()} />
                            : order.status === 'EN CAMINO'
                            ? <RoundedButton text='IR A LA RUTA' onPress={() => navigation.navigate('DeliveryOrderMapScreen', {order: order})} />
                            : []
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DeliveryOrderDetailScreen;
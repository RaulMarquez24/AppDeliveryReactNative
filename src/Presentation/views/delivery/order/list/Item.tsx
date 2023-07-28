import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Order } from '../../../../../Domain/entities/Order';
import { color } from 'react-native-reanimated';
import { DateFormatter } from '../../../../utils/DateFormatter';
import { StackNavigationProp } from '@react-navigation/stack';
import { DeliveryOrderStackParamList } from '../../../../navigator/DeliveryOrderStackNavigator';
import { useNavigation } from '@react-navigation/native';

interface Props {
    order: Order,
    navigation: StackNavigationProp<DeliveryOrderStackParamList, 'DeliveryOrderListScreen', undefined>
}

export const OrderListItem = ({ order, navigation }: Props) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('DeliveryOrderDetailScreen', {order: order})}>
            <View style={styles.container}>
                <Text style={styles.order}>Orden #{order.id}</Text>
                <Text style={{ ...styles.info, marginTop: 10 }}>Fecha del pedido: {DateFormatter(order.timestamp!)}</Text>
                <Text style={styles.info}>Cliente: {order.client?.name} {order.client?.lastname}</Text>
                <Text style={styles.info}>Dirección: {order.address?.address}</Text>
                <Text style={styles.info}>Ciudad: {order.address?.zip_code} {order.address?.city}</Text>
                <View style={styles.divider}></View>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    info: {
        fontSize: 13,
    },
    order: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 18,
        marginTop: 10,
    },
    divider: {
        height: 1,
        backgroundColor: '#e2e2e2',
        flex: 1,
        // marginHorizontal: 30
        marginTop: 10
    },
})
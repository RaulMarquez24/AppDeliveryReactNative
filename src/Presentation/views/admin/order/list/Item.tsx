import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { CategoryStackParamList } from '../../../../navigator/AdminCategoryNavigator';
import { Order } from '../../../../../Domain/entities/Order';
import { color } from 'react-native-reanimated';
import { DateFormatter } from '../../../../utils/DateFormatter';
import { StackNavigationProp } from '@react-navigation/stack';
import { AdminOrderStackParamList } from '../../../../navigator/AdminOrderStackNavigator';
import { useNavigation } from '@react-navigation/native';

interface Props {
    order: Order,
    navigation: StackNavigationProp<AdminOrderStackParamList, 'AdminOrderListScreen', undefined>
}

export const OrderListItem = ({ order, navigation }: Props) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('AdminOrderDetailScreen', {order: order})}>
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
        // width: '100%',
        // flexDirection: 'row',
        // height: 70,
        marginHorizontal: 20,
        // marginTop: 10,
    },
    // image: {
    //     width: 60,
    //     height: 60,
    //     borderRadius: 15,
    // },
    info: {
        fontSize: 13,
    },
    // title: {
    //     color: '#000',
    //     fontSize: 15,
    // },
    // description: {
    //     color: 'gray',
    //     fontSize: 12,
    //     marginTop: 3,
    // },
    // actionContainer: {
    //     marginRight: 40,
    // },
    // actionImage: {
    //     width: 25,
    //     height: 25,
    //     marginVertical: 2,
    // },
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
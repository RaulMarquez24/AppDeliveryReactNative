import React from 'react'
import { View, Text, FlatList, Image, Button } from 'react-native';
import styles from './Styles'
import useViewModel from './ViewModel'
import { StackScreenProps } from '@react-navigation/stack'
import { AdminOrderStackParamList } from '../../../../navigator/AdminOrderStackNavigator'
import { OrderDetailItem } from './Item'
import { DateFormatter } from '../../../../utils/DateFormatter';
import { RoundedButton } from '../../../../components/RoundedButton'

interface Props extends StackScreenProps<AdminOrderStackParamList, 'AdminOrderDetailScreen'> { };

export const AdminOrderDetailScreen = ({ navigation, route }: Props) => {

    const { order } = route.params;
    const { total } = useViewModel(order);

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

                <Text style={styles.deliveries}>REPARTIDORES DISPONIBLES</Text>

                <View style={styles.totalInfo}>
                    <Text style={styles.total}>TOTAL: {total}€</Text>
                    <View style={styles.button}>
                        <RoundedButton text='DESPACHAR ORDEN' onPress={() => {}}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AdminOrderDetailScreen;